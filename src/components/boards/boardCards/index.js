import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import DialogShareBoard from "../../dialogs/dialogShareBoards";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const BoardItem = ({ title, description, id, removeBoard }) => {
  const classes = useStyles();
  const [isOpenDialogShareBoard, setIsOpenDialogShareBoard] = useState(false);
  const handleClickCloseDialogShareBoard = () => {
    setIsOpenDialogShareBoard(false);
  };
  const handleClickOpenDialogShareBoard = () => {
    setIsOpenDialogShareBoard(true);
  };

  return (
    <>
      <DialogShareBoard
        nameBoard={title}
        isOpen={isOpenDialogShareBoard}
        onClose={handleClickCloseDialogShareBoard}
      />
      <Grid
        item
        key={title}
        xs={12}
        sm={title === "Enterprise" ? 12 : 6}
        md={4}
      >
        <Card>
          <CardHeader
            title={title}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.cardHeader}
          />
          <CardContent>
            <ul>{description}</ul>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="outlined" color="primary">
              <Link to={`/board/${id}`} style={{ textDecoration: "none" }}>
                Detail
              </Link>
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => {
                handleClickOpenDialogShareBoard();
              }}
            >
              Share
            </Button>
            <Button
              fullWidth
              variant="outlined"
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => {
                removeBoard(id);
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default BoardItem;
