import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import FacebookCircularProgress from "../../icons/progress";
import BoardColumn from "../boardColumn";
import services from "./services";
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

  // Setup
  useEffect(() => {
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
  }, [history, idBoard]);

  const handleCreateNewItem = (tag, item) => {
    setIsLoaded(false);
    (async () => {
      try {
        const { success, newItem } = await services.createNewItem(idBoard, {
          content: item,
          tag,
        });

        if (success) {
          switch (tag) {
            case category.wentWell.tag: {
              const newLists = [...wentWell];
              newLists.push({ content: newItem.content, id: newItem._id });
              setWentWell(newLists);
              break;
            }

            case category.toImprove.tag: {
              const newLists = [...toImprove];
              newLists.push({ content: newItem.content, id: newItem._id });
              setToImprove(newLists);
              break;
            }
            case category.actionItems.tag: {
              const newLists = [...actionItems];
              newLists.push({ content: newItem.content, id: newItem._id });
              setActionItems(newLists);
              break;
            }
            default:
              break;
          }
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
          switch (tag) {
            case category.wentWell.tag: {
              const newLists = wentWell.filter((ele) => {
                return ele.id !== id;
              });
              setWentWell(newLists);
              break;
            }

            case category.toImprove.tag: {
              const newLists = toImprove.filter((ele) => {
                return ele.id !== id;
              });
              setToImprove(newLists);
              break;
            }
            case category.actionItems.tag: {
              const newLists = actionItems.filter((ele) => {
                return ele.id !== id;
              });
              setActionItems(newLists);
              break;
            }
            default:
              break;
          }
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
        switch (tag) {
          case category.wentWell.tag: {
            const newWentWellList = wentWell.map((item) => {
              return item.id === id ? { ...item, content: newContent } : item;
            });
            setWentWell(newWentWellList);
            break;
          }
          case category.toImprove.tag: {
            const newToImprove = toImprove.map((item) => {
              return item.id === id ? { ...item, content: newContent } : item;
            });
            setToImprove(newToImprove);
            break;
          }
          case category.actionItems.tag: {
            const newActionItems = actionItems.map((item) => {
              return item.id === id ? { ...item, content: newContent } : item;
            });
            setActionItems(newActionItems);
            break;
          }
          default:
            break;
        }
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
