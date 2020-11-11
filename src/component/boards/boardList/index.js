import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MyBoard from "./myBoard";
import boardServices from "./service";
import ShareBoard from "./shareBoard";

const BoardList = () => {
  // History
  const history = useHistory();

  // States
  const [value, setValue] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);
  const [boardList, setBoardList] = useState([]);
  const [boardListShare, setBoardListShare] = useState([]);
  const [isOpenDialogNewBoard, setIsOpenDialogNewBoard] = useState(false);

  // Setup
  useEffect(() => {
    (async () => {
      try {
        const { success, boardsList } = await boardServices.getAll();

        if (!success) {
          alert("Error get boards list");
          setBoardList([]);
          return;
        }

        const { myBoards, shareBoards } = boardsList;

        setBoardList(myBoards);
        setBoardListShare(shareBoards);
        setIsLoaded(true);
      } catch (e) {
        const token = localStorage.getItem("token");

        if (!token) return;

        localStorage.removeItem("token");
        history.push("/login");
      }
    })();
  }, [history]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickCloseDialogNewBoard = () => {
    setIsOpenDialogNewBoard(false);
  };

  const handleClickOpenAddBoard = () => {
    setIsOpenDialogNewBoard(true);
  };

  const handleClickCreateBoard = (title) => {
    setIsLoaded(false);
    (async () => {
      try {
        const { success, board } = await boardServices.createNewBoard({
          title,
        });

        if (!success) {
          alert("Create new board failed");
          return;
        }

        const newList = [...boardList];
        newList.push(board);
        setBoardList(newList);
      } catch (e) {
        alert("Can't connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  const handleRemoveBoard = (id, title) => {
    const alertConfirm = window.confirm(`Do you want to delete ${title}?`);

    if (!alertConfirm) return;

    setIsLoaded(false);
    (async () => {
      try {
        const { success, message } = await boardServices.removeBoard({ id });
        if (success) {
          const newList = boardList.filter((item) => {
            return item._id !== id;
          });

          setBoardList(newList);
        } else {
          alert(message);
        }
      } catch (e) {
        alert("Can't connect to server!");
      }

      setIsLoaded(true);
    })();
  };

  const handleEditBoard = (id, title) => {
    setIsLoaded(false);
    const listBoardRef = value === 0 ? boardList : boardListShare;
    const setBoardListRef = value === 0 ? setBoardList : setBoardListShare;

    (async () => {
      try {
        const { success, message } = await boardServices.changeBoard({
          id,
          title,
        });
        if (success) {
          const newList = listBoardRef.map((item) => {
            return item._id === id ? { ...item, title } : item;
          });

          setBoardListRef(newList);
        } else {
          alert(message);
        }
      } catch (e) {
        alert("Can't connect to server!");
      }

      setIsLoaded(true);
    })();
  };

  const handleShareBoard = (id, email) => {
    setIsLoaded(false);
    (async () => {
      try {
        const { success, message } = await boardServices.shareBoard(id, email);

        if (!success) {
          alert(message);
        } else {
          setBoardList(
            boardList.map((board) =>
              board._id === id
                ? { ...board, shareWith: board.shareWith + 1 }
                : board
            )
          );
        }
      } catch (e) {
        alert("Can't connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="tab"
          centered
        >
          <Tab label="My Board" fullWidth />
          <Tab label="Share Board" fullWidth />
        </Tabs>
      </Paper>
      {value === 0 ? (
        <MyBoard
          boardList={boardList}
          isLoaded={isLoaded}
          isOpenDialogNewBoard={isOpenDialogNewBoard}
          handleClickCloseDialogNewBoard={handleClickCloseDialogNewBoard}
          handleClickCreateBoard={handleClickCreateBoard}
          handleClickOpenAddBoard={handleClickOpenAddBoard}
          handleRemoveBoard={handleRemoveBoard}
          handleEditBoard={handleEditBoard}
          handleShareBoard={handleShareBoard}
        />
      ) : (
        <ShareBoard
          boardList={boardListShare}
          isLoaded={isLoaded}
          isOpenDialogNewBoard={isOpenDialogNewBoard}
          handleClickCloseDialogNewBoard={handleClickCloseDialogNewBoard}
          handleClickCreateBoard={handleClickCreateBoard}
          handleClickOpenAddBoard={handleClickOpenAddBoard}
          handleRemoveBoard={handleRemoveBoard}
          handleEditBoard={handleEditBoard}
          handleShareBoard={handleShareBoard}
        />
      )}
    </>
  );

  // return (
  //   <FacebookCircularProgress isDisplay={!isLoaded}>
  //     <DialogNewBoard
  //       isOpen={isOpenDialogNewBoard}
  //       onClickClose={handleClickCloseDialogNewBoard}
  //       onClickCreate={handleClickCreateBoard}
  //     />
  //     <Container maxWidth="sm" component="main" className={classes.heroContent}>
  //       <Typography
  //         component="h3"
  //         variant="h3"
  //         align="center"
  //         color="textPrimary"
  //         gutterBottom
  //       >
  //         MY BOARDS
  //       </Typography>
  //     </Container>
  //     <Container maxWidth="lg" component="main">
  //       <Grid container spacing={5} alignItems="flex-end">
  //         <BoardCardAdd onClick={handleClickOpenAddBoard} />

  //         {boardList.map((item) => {
  //           const { title, dateCreate, _id: id } = item;
  //           return (
  //             <BoardCard
  //               title={title}
  //               id={id}
  //               dateCreate={dateCreate}
  //               onRemoveBoard={handleRemoveBoard}
  //               onEditboard={handleEditBoard}
  //               onShareBoard={handleShareBoard}
  //             />
  //           );
  //         })}
  //       </Grid>
  //     </Container>
  //   </FacebookCircularProgress>
  // );
};

export default BoardList;
