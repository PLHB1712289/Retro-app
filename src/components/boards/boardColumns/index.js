import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "../../icons/addIcons";
import BoardAddItem from "../boardAddItems";
import useStyles from "./styles";
import RemoveIcon from "../../../assert/icons/remove.png";

const BoardColumn = ({ category, data, addItem, removeItem }) => {
  const classes = useStyles();
  const { color, title, tag } = category;
  const [isAddItem, setIsAddItem] = useState(false);

  const handleAdd = (item) => {
    addItem(tag, item);
  };

  const handleRemove = (id) => {
    removeItem(tag, id);
  };

  const handleClickOpenAddItem = () => {
    setIsAddItem(true);
  };

  const handleClickCloseAddItem = () => {
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

          <AddIcon
            size="20px"
            backgroundColor={color}
            onClickIcon={handleClickOpenAddItem}
          />
        </div>
      </Grid>
      <BoardAddItem
        color={color}
        isOpenAdd={isAddItem}
        onClickAddButton={handleAdd}
        onClickCancelButton={handleClickCloseAddItem}
      />

      {data.map((item) => {
        const { content, id } = item;
        return (
          <Grid
            item
            xs={12}
            className={classes.item}
            style={{ backgroundColor: `${color}` }}
          >
            <div style={{ wordWrap: "break-word" }}>{content}</div>
            <img
              className={classes.remove}
              src={RemoveIcon}
              alt="remove"
              onClick={() => {
                handleRemove(id);
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BoardColumn;
