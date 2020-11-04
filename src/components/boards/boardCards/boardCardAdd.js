import { Card, Grid } from "@material-ui/core";
import React from "react";
import PlusIcon from "../../../assert/icons/plus.png";
import useStyles from "./styles";

const BoardItemAdd = ({ onClick }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card
          onClick={() => onClick()}
          className={classes.hover}
          style={{
            border: "2px dashed black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              height: 164,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={PlusIcon}
              alt="add icon"
              style={{ width: 100, height: 100 }}
            />
            <label>Add</label>
          </div>
        </Card>
      </Grid>
    </>
  );
};

export default BoardItemAdd;
