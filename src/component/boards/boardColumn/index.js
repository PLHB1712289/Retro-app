import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import React, { useState } from "react";
import Item from "../item";
import NewItem from "../newItem";
import useStyles from "./styles";

const BoardColumn = ({
  category,
  data,
  onClickNewItem,
  onClickRemoveItem,
  onClickChangeItem,
}) => {
  // Styles
  const classes = useStyles();

  //
  const { color, title, tag } = category;

  // States
  const [isAddItem, setIsAddItem] = useState(false);

  // Setup
  const handleCreateNewItem = (item) => {
    onClickNewItem(tag, item);
  };

  const handleChangeItem = (id, content) => {
    onClickChangeItem(tag, id, content);
  };

  const handleRemoveItem = (id, content) => {
    onClickRemoveItem(tag, id, content);
  };

  const handleClickCreateNewItem = () => {
    setIsAddItem(true);
  };

  const handleClickCloseNewItem = () => {
    setIsAddItem(false);
  };

  return (
    <Grid item md={4} xs={12} spacing={3} className={classes.column}>
      <Grid item xs={12} className={classes.lable}>
        <div className={classes.tag}>
          <div className={classes.containerTitle}>
            <div
              className={classes.title}
              style={{
                backgroundColor: `${color}`,
              }}
            ></div>
            <lable style={{ fontSize: 22, fontWeight: 500 }}>{title}</lable>
          </div>

          <IconButton aria-label="add" onClick={handleClickCreateNewItem}>
            <LibraryAddIcon />
          </IconButton>
        </div>
      </Grid>
      {isAddItem ? (
        <NewItem
          color={color}
          onClickCheck={handleCreateNewItem}
          onClickCancel={handleClickCloseNewItem}
        />
      ) : (
        <></>
      )}

      {data.map((item) => {
        const { content, id } = item;
        return (
          <Item
            key={id}
            id={id}
            color={color}
            content={content}
            onRemove={handleRemoveItem}
            onChange={handleChangeItem}
          />
        );
      })}
    </Grid>
  );
};

export default BoardColumn;
