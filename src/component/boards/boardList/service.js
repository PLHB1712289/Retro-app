import boardAPIs from "./api";

const boardServices = {
  getAll: () => {
    return boardAPIs.GET_allBoard();
  },
  createNewBoard: (board) => {
    return boardAPIs.POST_createNewBoard(board);
  },
  changeBoard: (board) => {
    return boardAPIs.POST_changeBoard(board);
  },
  removeBoard: (board) => {
    return boardAPIs.POST_removeBoard(board);
  },
  shareBoard: (id, email) => {
    return boardAPIs.POST_shareBoard(id, email);
  },
};

export default boardServices;
