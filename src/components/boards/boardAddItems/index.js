import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";

const BoardAddItem = ({
  color,
  isOpenAdd,
  onClickAddButton,
  onClickCancelButton,
}) => {
  const classes = useStyles();
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    const { value } = e.target;

    setContent(value);
  };

  const handleAddItem = () => {
    onClickAddButton(content);
    setContent("");
    onClickCancelButton();
  };

  return (
    <>
      {isOpenAdd === true ? (
        <Grid item xs={12} className={classes.container}>
          <lable style={{ fontSize: 20 }}>Add new item</lable>
          <input
            autoFocus
            className={classes.input}
            onChange={handleChangeContent}
          />
          <div className={classes.areaButton}>
            <Button
              className={classes.button}
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleAddItem()}
            >
              Add
            </Button>
            <Button
              className={classes.button}
              style={{ backgroundColor: `${color}` }}
              onClick={() => onClickCancelButton()}
            >
              Cancel
            </Button>
          </div>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default BoardAddItem;
