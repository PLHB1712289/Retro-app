import { Grid, IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import React, { useEffect, useState, useRef } from "react";
import STATE_ITEM from "./data";
import useStyles from "./styles";

const Item = ({ color, content, onChangeState, drag, style, onFocus }) => {
  // Styles
  const classes = useStyles();

  // Setup
  const handleEnableEdit = () => {
    onChangeState(STATE_ITEM.EDIT);
  };

  const border = onFocus ? "4px solid red" : "";
  const alertFocus = onFocus ? "Someone is editing this item..." : null;

  // Render
  return (
    <Grid
      ref={drag}
      item
      xs={12}
      className={classes.item}
      style={{ backgroundColor: `${color}`, style, border }}
    >
      <span
        style={{
          wordWrap: "break-word",
          maxWidth: "85%",
        }}
      >
        <div>{content}</div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "red",
          }}
        >
          {alertFocus}
        </div>
      </span>

      <IconButton aria-label="delete" onClick={() => handleEnableEdit()}>
        <CreateIcon />
      </IconButton>
    </Grid>
  );
};

export default Item;
