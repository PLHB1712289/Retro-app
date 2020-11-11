import { Grid, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";

import ClearSharpIcon from "@material-ui/icons/ClearSharp";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

import STATE_ITEM from "./data";

const EditItem = ({
  color,
  id,
  content,
  onChangeState,
  onRemove,
  onChange,
}) => {
  // Styles
  const classes = useStyles();

  // States
  const [contentInput, setContentInput] = useState(content);

  // Setup
  const handleDisableEdit = () => {
    const confirmDisbleEdit = window.confirm("Do you want to stop editing?");

    if (confirmDisbleEdit) {
      onChangeState(STATE_ITEM.VIEW);
    }
  };

  const handleChangeContentInput = (e) => {
    const { value } = e.target;
    setContentInput(value);
  };

  const handleRemoveItem = () => {
    onRemove(id, content);
    onChangeState(STATE_ITEM.VIEW);
  };

  const handleChangeItem = () => {
    if (!contentInput) {
      alert("Please fill content!");
      return;
    }

    onChange(id, contentInput);
    onChangeState(STATE_ITEM.VIEW);
  };

  // Render
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
        value={contentInput}
        onChange={handleChangeContentInput}
      />
      <div className={classes.areaButton}>
        <IconButton
          className={classes.button}
          onClick={() => handleRemoveItem()}
        >
          <DeleteIcon />
        </IconButton>
        <div>
          <IconButton
            style={{
              color: "red",
            }}
            className={classes.button}
            onClick={handleDisableEdit}
          >
            <ClearSharpIcon />
          </IconButton>
          <IconButton
            style={{
              color: "green",
            }}
            className={classes.button}
            onClick={handleChangeItem}
          >
            <CheckIcon />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
};

export default EditItem;
