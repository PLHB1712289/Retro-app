import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import io from "socket.io-client";
import FacebookCircularProgress from "../../icons/progress";
import BoardColumn from "../boardColumn";
import services from "./services";
import { setupSocket, TAG_SOCKET_IO } from "./socket.io";
import useStyles from "./styles";

const category = {
  wentWell: {
    title: "went well",
    color: "#00dd77",
    tag: 1,
  },
  toImprove: {
    title: "to improve",
    color: "#fbc02d",
    tag: 2,
  },
  actionItems: {
    title: "action items",
    color: "#ff5252",
    tag: 3,
  },
};

const BoardDetail = () => {
  // Styles
  const classes = useStyles();

  // React router hook
  const { idBoard } = useParams();
  const history = useHistory();

  // States
  const [isLoaded, setIsLoaded] = useState(false);
  const [wentWell, setWentWell] = useState([]);
  const [toImprove, setToImprove] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [title, setTitle] = useState("");

  const [socket, setSocket] = useState(null);

  if (socket) {
    setupSocket({
      category,
      wentWell,
      toImprove,
      actionItems,
      setWentWell,
      setToImprove,
      setActionItems,
      socket,
      idBoard,
    });
  }

  // eslint-disable-next-line
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    // Fetch data
    (async () => {
      try {
        const result = await services.getAllItems(idBoard);

        const {
          title,
          listItemsWentWell,
          listItemsToImprove,
          listItemsActionItems,
        } = result;

        console.log("result", result);

        if (!title) {
          alert(result);
          history.push("/");
          return;
        }

        setIsLoaded(true);
        setTitle(title);
        setToImprove(listItemsToImprove);
        setActionItems(listItemsActionItems);
        setWentWell(listItemsWentWell);
      } catch (e) {
        setIsLoaded(true);
        alert("Can't connect to server!");
      }
    })();

    return () => newSocket.disconnect();
  }, []);

  const handleCreateNewItem = (tag, item) => {
    // Send request server
    setIsLoaded(false);
    (async () => {
      try {
        const { success, newItem } = await services.createNewItem(idBoard, {
          content: item,
          tag,
        });

        if (success) {
          socket.emit(TAG_SOCKET_IO.REQUEST_CREATE, {
            tag,
            content: item,
            id: newItem._id,
            idBoard,
          });
        } else {
          alert("Add new item failed!");
        }
      } catch (e) {
        alert("Can't connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  const handleRemoveItem = (tag, id, content) => {
    const confirmRemove = window.confirm(`Do you want to delete "${content}"?`);

    if (!confirmRemove) return;
    setIsLoaded(false);
    (async () => {
      try {
        const { success } = await services.removeItem(idBoard, {
          id,
        });

        if (success) {
          socket.emit(TAG_SOCKET_IO.REQUEST_REMOVE, { tag, id, idBoard });
        } else {
          alert("Remove item failed!");
        }
      } catch (e) {
        alert("Can't connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  const handleChangeItem = (tag, id, newContent) => {
    const confirmChange = window.confirm("Do you want to change this item?");

    if (!confirmChange) return;

    setIsLoaded(false);

    (async () => {
      const { success } = await services.changeItem(idBoard, {
        id,
        content: newContent,
      });

      if (success) {
        socket.emit(TAG_SOCKET_IO.REQUEST_EDIT, {
          id,
          tag,
          content: newContent,
          idBoard,
        });
      }

      setIsLoaded(true);
    })();
  };

  return (
    <FacebookCircularProgress isDisplay={!isLoaded}>
      <Container maxWidth="lg" component="main" className={classes.container}>
        <label className={classes.title}>{title}</label>

        <Grid container>
          <BoardColumn
            category={category.wentWell}
            data={wentWell}
            onClickNewItem={handleCreateNewItem}
            onClickRemoveItem={handleRemoveItem}
            onClickChangeItem={handleChangeItem}
          />
          <BoardColumn
            category={category.toImprove}
            data={toImprove}
            onClickNewItem={handleCreateNewItem}
            onClickRemoveItem={handleRemoveItem}
            onClickChangeItem={handleChangeItem}
          />
          <BoardColumn
            category={category.actionItems}
            data={actionItems}
            onClickNewItem={handleCreateNewItem}
            onClickRemoveItem={handleRemoveItem}
            onClickChangeItem={handleChangeItem}
          />
        </Grid>
      </Container>
    </FacebookCircularProgress>
  );
};

export default BoardDetail;
