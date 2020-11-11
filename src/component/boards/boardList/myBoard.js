import { Container, Grid } from "@material-ui/core";
import React from "react";
import DialogNewBoard from "../../dialogs/dialogNewBoard";
import FacebookCircularProgress from "../../icons/progress";
import BoardCard from "../boardCard";
import BoardCardAdd from "../boardCard/boardCardAdd";
import useStyles from "./styles";

const MyBoard = ({
  boardList,
  isLoaded,
  isOpenDialogNewBoard,
  handleClickCloseDialogNewBoard,
  handleClickCreateBoard,
  handleClickOpenAddBoard,
  handleRemoveBoard,
  handleEditBoard,
  handleShareBoard,
}) => {
  const classes = useStyles();

  return (
    <FacebookCircularProgress isDisplay={!isLoaded}>
      <DialogNewBoard
        isOpen={isOpenDialogNewBoard}
        onClickClose={handleClickCloseDialogNewBoard}
        onClickCreate={handleClickCreateBoard}
      />
      <Container
        maxWidth="sm"
        component="main"
        className={classes.heroContent}
      ></Container>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <BoardCardAdd onClick={handleClickOpenAddBoard} />

          {boardList.map((item) => {
            const { title, dateCreate, _id: id, shareWith } = item;
            return (
              <BoardCard
                title={title}
                id={id}
                dateCreate={dateCreate}
                onRemoveBoard={handleRemoveBoard}
                onEditboard={handleEditBoard}
                onShareBoard={handleShareBoard}
                shareWith={shareWith}
              />
            );
          })}
        </Grid>
      </Container>
    </FacebookCircularProgress>
  );
};

export default MyBoard;
