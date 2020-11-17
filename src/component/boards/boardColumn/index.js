import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import React, { useState } from "react";
import NewItem from "../newItem";
import useStyles from "./styles";

import { useDrop } from "react-dnd";

const BoardColumn = ({ category, onClickNewItem, children }) => {
  // Styles
  const classes = useStyles();

  //
  const { COLOR: color, TITLE: title, TAG: tag } = category;

  // States
  const [isAddItem, setIsAddItem] = useState(false);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Hello",
    drop: () => ({ tag: tag }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: (item) => {
      // console.log("candrop receive item:", item);
      return true;
    },
  });

  const getBackgroundColor = () => {
    if (isOver && canDrop) {
      return "rgba(33,150,243,0.2)";
    }
  };

  // Setup
  const handleCreateNewItem = (item) => {
    onClickNewItem(tag, item);
  };

  const handleClickCreateNewItem = () => {
    setIsAddItem(true);
  };

  const handleClickCloseNewItem = () => {
    setIsAddItem(false);
  };

  return (
    <Grid
      item
      md={4}
      xs={12}
      spacing={3}
      className={classes.column}
      style={{ backgroundColor: getBackgroundColor() }}
      ref={drop}
    >
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
      {children}
    </Grid>
  );
};

export default BoardColumn;
