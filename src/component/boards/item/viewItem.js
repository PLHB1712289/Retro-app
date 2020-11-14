import { Grid, IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import STATE_ITEM from "./data";
import useStyles from "./styles";

const Item = ({ color, content, onChangeState }) => {
  // Styles
  const classes = useStyles();

  // Setup
  const handleEnableEdit = () => {
    onChangeState(STATE_ITEM.EDIT);
  };

  // Render
  return (
    <Grid
      item
      xs={12}
      className={classes.item}
      style={{ backgroundColor: `${color}` }}
    >
      <span
        style={{
          wordWrap: "break-word",
          maxWidth: "85%",
        }}
      >
        {content}
      </span>

      <IconButton aria-label="delete" onClick={() => handleEnableEdit()}>
        <CreateIcon />
      </IconButton>
    </Grid>
  );
};

export default Item;
