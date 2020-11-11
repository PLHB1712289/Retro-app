import { Grid, IconButton } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";
import React, { useState } from "react";
import useStyles from "../item/styles";

const NewItem = ({ color, onClickCheck, onClickCancel }) => {
  const classes = useStyles();
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    const { value } = e.target;

    setContent(value);
  };

  const handleAddItem = () => {
    onClickCheck(content);
    setContent("");
    onClickCancel();
  };

  return (
    <Grid
      item
      xs={12}
      className={classes.container}
      style={{ borderColor: `${color}`, backgroundColor: "white" }}
    >
      <input
        autoFocus
        className={classes.input}
        style={{ borderColor: `${color}` }}
        onChange={handleChangeContent}
      />
      <div className={classes.areaButton}>
        <div></div>
        <div>
          <IconButton
            style={{
              color: "red",
            }}
            className={classes.button}
            onClick={() => onClickCancel()}
          >
            <ClearSharpIcon />
          </IconButton>
          <IconButton
            style={{
              color: "green",
            }}
            className={classes.button}
            onClick={() => handleAddItem()}
          >
            <CheckIcon />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
};

export default NewItem;
