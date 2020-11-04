import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DialogNewBoard from "../../dialogs/dialogNewBoards";
import FacebookCircularProgress from "../../icons/progressComponent";
import BoardCard from "../boardCards";
import BoardCardAdd from "../boardCards/boardCardAdd";
import boardServices from "./boardListServices";
import useStyles from "./styles";

const BoardList = ({ onClickItem }) => {
  const classes = useStyles();

  const [boardList, setBoardList] = useState(null);
  const [isOpenDialogAddBoard, setIsOpenDialogAddBoard] = useState(false);

  useEffect(() => {
    const fetchBoardList = async () => {
      const boardList = await boardServices.getAll();
      console.log(boardList);
      setBoardList(boardList);
    };

    fetchBoardList();
  }, []);

  const handleClickCloseDialogAddBoard = () => {
    setIsOpenDialogAddBoard(false);
  };

  const handleClickOpenAddBoard = () => {
    setIsOpenDialogAddBoard(true);
  };

  const handleClickAddBoard = (title, description) => {
    // services.createNewBoard();
    boardServices.crearNewBoard({ title, description }).then((res) => {
      const newList = [...boardList];
      newList.push(res);
      setBoardList(newList);
    });
  };

  const removeBoard = (id) => {
    const newList = boardList.filter((item) => {
      return item._id !== id;
    });
    setBoardList(newList);

    boardServices.removeBoard({ id });
  };

  return (
    <React.Fragment>
      {/* Hero unit */}
      <DialogNewBoard
        isOpen={isOpenDialogAddBoard}
        onClickClose={handleClickCloseDialogAddBoard}
        onClickOK={handleClickAddBoard}
      />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          MY BOARDS
        </Typography>
      </Container>
      {/* <div style={{ backgroundColor: "red", width: 100, height: 100 }}></div> */}

      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <BoardCardAdd onClick={handleClickOpenAddBoard} />

          {!boardList ? (
            <Grid item xs={12}>
              <FacebookCircularProgress />
            </Grid>
          ) : (
            boardList.map((item) => {
              const { title, description, _id: id } = item;
              return (
                <BoardCard
                  title={title}
                  description={description}
                  id={id}
                  removeBoard={removeBoard}
                />
              );
            })
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default BoardList;
