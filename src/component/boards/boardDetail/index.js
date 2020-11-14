import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import FacebookCircularProgress from "../../icons/progress";
import BoardColumn from "../boardColumn";
import services from "./services";
import useStyles from "./styles";

import io from "socket.io-client";
let socket;

const TAG_SOCKET_IO = {
  JOIN_ROOM: "join_room",
  REQUEST_CREATE: "request_create",
  REQUEST_REMOVE: "request_remove",
  REQUEST_EDIT: "request_edit",
  RESPONSE_CREATE: "response_create",
  RESPONSE_REMOVE: "response_remove",
  RESPONSE_EDIT: "response_edit",
};

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

  const fetch = () => {
    socket = io("http://localhost:3000");
    // Request connect room
    socket.emit(TAG_SOCKET_IO.JOIN_ROOM, idBoard);

    // Setup event Receive data from server
    socket.on(TAG_SOCKET_IO.RESPONSE_CREATE, ({ id, tag, content }) => {
      console.log("Response create");
      switch (tag) {
        case category.wentWell.tag:
          setWentWell([...wentWell].push({ id, content }));
          break;

        case category.toImprove.tag:
          setToImprove([...toImprove].push({ id, content }));
          break;

        case category.actionItems.tag:
          setActionItems([...actionItems].push({ id, content }));
          break;

        default:
          break;
      }
    });
    socket.on(TAG_SOCKET_IO.RESPONSE_REMOVE, ({ id, tag }) => {
      console.log("Response remove");
      switch (tag) {
        case category.wentWell.tag:
          setWentWell(wentWell.filter((item) => item.id !== id));
          break;

        case category.toImprove.tag:
          setToImprove(toImprove.filter((item) => item.id !== id));
          break;

        case category.actionItems.tag:
          setActionItems(actionItems.filter((item) => item.id !== id));
          break;

        default:
          break;
      }
    });
    socket.on(TAG_SOCKET_IO.RESPONSE_EDIT, ({ id, tag, content }) => {
      console.log("Response edit");
      switch (tag) {
        case category.wentWell.tag:
          setWentWell(
            wentWell.map((item) =>
              item.id === id ? { ...item, content } : item
            )
          );
          break;

        case category.toImprove.tag:
          setToImprove(
            toImprove.map((item) =>
              item.id === id ? { ...item, content } : item
            )
          );
          break;

        case category.actionItems.tag:
          setActionItems(
            actionItems.map((item) =>
              item.id === id ? { ...item, content } : item
            )
          );
          break;

        default:
          break;
      }
    });

    // Fetch data
    (async () => {
      console.log("Getdata");
      try {
        const result = await services.getAllItems(idBoard);

        const {
          title,
          listItemsWentWell,
          listItemsToImprove,
          listItemsActionItems,
        } = result;

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

    return () => socket.disconnect();
  };
  // Setup

  // eslint-disable-next-line
  useEffect(fetch, []);

  // useEffect(() => {
  // Fetch data
  // (async () => {
  //   try {
  //     const result = await services.getAllItems(idBoard);
  //     const {
  //       title,
  //       listItemsWentWell,
  //       listItemsToImprove,
  //       listItemsActionItems,
  //     } = result;
  //     if (!title) {
  //       alert(result);
  //       history.push("/");
  //       return;
  //     }
  //     setIsLoaded(true);
  //     setTitle(title);
  //     setToImprove(listItemsToImprove);
  //     setActionItems(listItemsActionItems);
  //     setWentWell(listItemsWentWell);
  //   } catch (e) {
  // setIsLoaded(true);
  //     alert("Can't connect to server!");
  //   }
  // })();
  // });

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
