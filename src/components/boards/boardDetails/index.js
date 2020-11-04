import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FacebookCircularProgress from "../../icons/progressComponent";
import BoardColumn from "../boardColumns";
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

const BoardDetail = ({ idBoard }) => {
  const classes = useStyles();

  const [wentWell, setWentWell] = useState(null);
  const [toImprove, setToImprove] = useState(null);
  const [actionItems, setActionItems] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const {
        title,
        description,
        listItemsWentWell,
        listItemsToImprove,
        listItemsActionItems,
      } = await services.GET_allItems(idBoard);

      setTitle(title);
      setDescription(description);
      setToImprove(listItemsToImprove);
      setActionItems(listItemsActionItems);
      setWentWell(listItemsWentWell);
    };

    fetchItems();
  }, []);

  const addItem = (tag, item) => {
    switch (tag) {
      case 1: {
        const newLists = [...wentWell];
        services.POST_addItem(idBoard, { content: item, tag }).then((res) => {
          newLists.push({ content: res.content, id: res._id });
          setWentWell(newLists);
        });
        break;
      }

      case 2: {
        const newLists = [...toImprove];
        services.POST_addItem(idBoard, { content: item, tag }).then((res) => {
          newLists.push({ content: res.content, id: res._id });
          setToImprove(newLists);
        });
        break;
      }
      case 3: {
        const newLists = [...actionItems];
        services.POST_addItem(idBoard, { content: item, tag }).then((res) => {
          newLists.push({ content: res.content, id: res._id });
          setActionItems(newLists);
        });
        break;
      }
      default:
        break;
    }
  };

  const removeItem = (tag, id) => {
    switch (tag) {
      case 1: {
        const newLists = wentWell.filter((ele) => {
          return ele.id != id;
        });
        setWentWell(newLists);
        break;
      }

      case 2: {
        const newLists = toImprove.filter((ele) => {
          return ele.id != id;
        });
        setToImprove(newLists);
        break;
      }
      case 3: {
        const newLists = actionItems.filter((ele) => {
          return ele.id != id;
        });
        setActionItems(newLists);
        break;
      }
      default:
        break;
    }

    services.POST_removeItem(idBoard, { id });
  };

  return (
    <Container maxWidth="lg" component="main" className={classes.container}>
      <label className={classes.title}>{title}</label>
      {wentWell === null ? (
        <FacebookCircularProgress />
      ) : (
        <Grid container>
          <BoardColumn
            category={category.wentWell}
            data={wentWell}
            addItem={addItem}
            removeItem={removeItem}
          />
          <BoardColumn
            category={category.toImprove}
            data={toImprove}
            addItem={addItem}
            removeItem={removeItem}
          />
          <BoardColumn
            category={category.actionItems}
            data={actionItems}
            addItem={addItem}
            removeItem={removeItem}
          />
        </Grid>
      )}
    </Container>
  );
};

export default BoardDetail;
