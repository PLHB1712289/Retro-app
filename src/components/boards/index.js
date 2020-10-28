import React, { useEffect, useState } from "react";

import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BoardItem from "../boardItems";
import boardServices from "./boardServices";
import FacebookCircularProgress from "./progressComponent";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Board = () => {
  const classes = useStyles();

  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const fetchBoardList = async () => {
      const boardList = await boardServices.getAll();
      setBoardList(boardList);
    };

    fetchBoardList();
  }, []);

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          MY BOARD
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {boardList.length === 0 ? (
            <Grid item xs={12}>
              <FacebookCircularProgress />
            </Grid>
          ) : (
            boardList.map((item) => {
              const { title, description } = item;
              return <BoardItem title={title} description={description} />;
            })
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Board;
