import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import io from "socket.io-client";
import FacebookCircularProgress from "../../icons/progress";
import BoardColumn from "../boardColumn";
import Item from "../item";
import DATA from "./data";
import services from "./services";
import useStyles from "./styles";
import config from "../../../config";

const CATEGORY = DATA.CATEGORY;
const TAG_SOCKET_IO = DATA.TAG_SOCKET_IO;

const BoardDetail = () => {
  // Styles
  const classes = useStyles();

  // React router hook
  const { idBoard } = useParams();
  const history = useHistory();

  // States
  const [socket, setSocket] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wentWell, setWentWell] = useState([]);
  const [toImprove, setToImprove] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [title, setTitle] = useState("");

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
          console.log("Create new item, socket: ", socket);
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

  const handleFocusItem = (id, tag) => {
    socket.emit(TAG_SOCKET_IO.REQUEST_FOCUS_ITEM, { idBoard, id, tag });
  };

  const handleCancelFocusItem = (id, tag) => {
    socket.emit(TAG_SOCKET_IO.REQUEST_CANCEL_FOCUS_ITEM, { idBoard, id, tag });
  };

  const handleDragAndDrop = (id, oldTag, newTag) => {
    setIsLoaded(false);
    (async () => {
      try {
        const { success, message } = await services.dragDropItem(
          idBoard,
          id,
          newTag
        );

        if (!success) {
          alert(`error: ${message}`);
        } else {
          socket.emit(TAG_SOCKET_IO.REQUEST_DND, {
            id,
            newTag,
            oldTag,
            idBoard,
          });

          handleCancelFocusItem(id, newTag);
        }
      } catch (e) {
        alert("Cannot connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  // Setup socket
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    newSocket.emit(TAG_SOCKET_IO.JOIN_ROOM, idBoard);

    newSocket.on(TAG_SOCKET_IO.RESPONSE_CREATE, ({ id, tag, content }) => {
      switch (tag) {
        case CATEGORY.WENTWELL.TAG: {
          setWentWell((prevState) => {
            const newListItem = [...prevState];
            newListItem.push({ id, content, tag, focus: false });
            return newListItem;
          });
          break;
        }

        case CATEGORY.TOIMPROVE.TAG: {
          setToImprove((prevState) => {
            const newListItem = [...prevState];
            newListItem.push({ id, content, tag, focus: false });
            return newListItem;
          });
          break;
        }

        case CATEGORY.ACTIONITEMS.TAG: {
          setActionItems((prevState) => {
            const newListItem = [...prevState];
            newListItem.push({ id, content, tag, focus: false });
            return newListItem;
          });
          break;
        }

        default:
          break;
      }
    });

    newSocket.on(TAG_SOCKET_IO.RESPONSE_REMOVE, ({ id, tag }) => {
      switch (tag) {
        case CATEGORY.WENTWELL.TAG:
          setWentWell((prevState) =>
            prevState.filter((item) => item.id !== id)
          );
          break;

        case CATEGORY.TOIMPROVE.TAG:
          setToImprove((prevState) =>
            prevState.filter((item) => item.id !== id)
          );
          break;

        case CATEGORY.ACTIONITEMS.TAG:
          setActionItems((prevState) =>
            prevState.filter((item) => item.id !== id)
          );
          break;

        default:
          break;
      }
    });

    newSocket.on(TAG_SOCKET_IO.RESPONSE_EDIT, ({ id, tag, content }) => {
      switch (tag) {
        case CATEGORY.WENTWELL.TAG:
          setWentWell((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, content } : item
            )
          );
          break;

        case CATEGORY.TOIMPROVE.TAG:
          setToImprove((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, content } : item
            )
          );
          break;

        case CATEGORY.ACTIONITEMS.TAG:
          setActionItems((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, content } : item
            )
          );
          break;

        default:
          break;
      }
    });

    newSocket.on(TAG_SOCKET_IO.RESPONSE_DND, ({ id, oldTag, newTag }) => {
      let oldItem = null;

      // remove item
      switch (oldTag) {
        case CATEGORY.WENTWELL.TAG:
          setWentWell((prevState) => {
            oldItem = prevState.filter((item) => item.id === id)[0];
            return prevState.filter((item) => item.id !== id);
          });
          break;

        case CATEGORY.TOIMPROVE.TAG:
          setToImprove((prevState) => {
            oldItem = prevState.filter((item) => item.id === id)[0];
            return prevState.filter((item) => item.id !== id);
          });
          break;

        case CATEGORY.ACTIONITEMS.TAG:
          setActionItems((prevState) => {
            oldItem = prevState.filter((item) => item.id === id)[0];
            return prevState.filter((item) => item.id !== id);
          });
          break;

        default:
          break;
      }

      oldItem.tag = newTag;

      // add item
      switch (newTag) {
        case CATEGORY.WENTWELL.TAG:
          setWentWell((prevState) => prevState.concat(oldItem));
          break;

        case CATEGORY.TOIMPROVE.TAG:
          setToImprove((prevState) => prevState.concat(oldItem));
          break;

        case CATEGORY.ACTIONITEMS.TAG:
          setActionItems((prevState) => prevState.concat(oldItem));
          break;

        default:
          break;
      }
    });

    newSocket.on(TAG_SOCKET_IO.RESPONSE_FOCUS_ITEM, ({ id, tag }) => {
      switch (tag) {
        case CATEGORY.WENTWELL.TAG:
          setWentWell((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, focus: true } : item
            )
          );
          break;

        case CATEGORY.TOIMPROVE.TAG:
          setToImprove((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, focus: true } : item
            )
          );
          break;

        case CATEGORY.ACTIONITEMS.TAG:
          setActionItems((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, focus: true } : item
            )
          );
          break;

        default:
          break;
      }
    });

    newSocket.on(TAG_SOCKET_IO.RESPONSE_CANCEL_FOCUS_ITEM, ({ id, tag }) => {
      switch (tag) {
        case CATEGORY.WENTWELL.TAG:
          setWentWell((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, focus: false } : item
            )
          );
          break;

        case CATEGORY.TOIMPROVE.TAG:
          setToImprove((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, focus: false } : item
            )
          );
          break;

        case CATEGORY.ACTIONITEMS.TAG:
          setActionItems((prevState) =>
            prevState.map((item) =>
              item.id === id ? { ...item, focus: false } : item
            )
          );
          break;

        default:
          break;
      }
    });

    setSocket(newSocket);

    return () => {
      console.log("disconnect socket");
      newSocket.emit("leave_room", { idBoard });
      newSocket.disconnect();
    };
  }, [idBoard]);

  // eslint-disable-next-line
  useEffect(() => {
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

        if (!title) {
          alert(result);
          history.push(`${config.PUBLIC_URL}/`);
          return;
        }

        setIsLoaded(true);
        setTitle(title);
        setWentWell(listItemsWentWell);
        setToImprove(listItemsToImprove);
        setActionItems(listItemsActionItems);
      } catch (e) {
        setIsLoaded(true);
        alert("Can't connect to server!");
      }
    })();
  }, [idBoard, history]);

  const getItems = (tag) => {
    switch (tag) {
      case CATEGORY.WENTWELL.TAG:
        return wentWell;

      case CATEGORY.TOIMPROVE.TAG:
        return toImprove;

      case CATEGORY.ACTIONITEMS.TAG:
        return actionItems;

      default:
        break;
    }
  };

  const createBoardColumn = (() => {
    const arr = Object.keys(CATEGORY).map((key, index) => {
      return (
        <BoardColumn
          category={CATEGORY[key]}
          onClickNewItem={handleCreateNewItem}
        >
          {getItems(CATEGORY[key].TAG).map((item) => {
            return (
              <Item
                color={CATEGORY[key].COLOR}
                item={item}
                onRemove={handleRemoveItem}
                onChange={handleChangeItem}
                onDnD={handleDragAndDrop}
                onFocus={handleFocusItem}
                onCancelFocus={handleCancelFocusItem}
              />
            );
          })}
        </BoardColumn>
      );
    });

    return arr;
  })();

  return (
    <FacebookCircularProgress isDisplay={!isLoaded}>
      <Container maxWidth="lg" component="main" className={classes.container}>
        <label className={classes.title}>{title}</label>

        <Grid container>{createBoardColumn}</Grid>
      </Container>
    </FacebookCircularProgress>
  );
};

export default BoardDetail;
