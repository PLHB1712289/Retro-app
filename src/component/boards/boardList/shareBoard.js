import { Container, Grid } from "@material-ui/core";
import React from "react";
import FacebookCircularProgress from "../../icons/progress";
import BoardCard from "../boardCard";
import useStyles from "./styles";

const ShareBoard = ({ boardList, isLoaded, handleEditBoard }) => {
  const classes = useStyles();
  return (
    <FacebookCircularProgress isDisplay={!isLoaded}>
      <Container
        maxWidth="sm"
        component="main"
        className={classes.heroContent}
      ></Container>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {boardList.map((item) => {
            const { title, dateCreate, _id: id, shareWith } = item;
            return (
              <BoardCard
                title={title}
                id={id}
                dateCreate={dateCreate}
                onEditboard={handleEditBoard}
                shareWith={shareWith}
              />
            );
          })}
        </Grid>
      </Container>
    </FacebookCircularProgress>
  );
};

export default ShareBoard;
