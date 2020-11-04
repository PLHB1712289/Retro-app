import boardAPIs from "./boardListAPIs";

const boardServices = {
  getAll: async () => {
    return await boardAPIs.GET_allBoard();
  },
  crearNewBoard: async (board) => {
    return boardAPIs.POST_createNewBoard(board);
  },
  removeBoard: async (board) => {
    return boardAPIs.POST_removeBoard(board);
  },
};

export default boardServices;
