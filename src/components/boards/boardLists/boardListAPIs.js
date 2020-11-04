import axiosClient from "../../../api/axiosClient";

const boardAPI = {
  GET_allBoard: async (params) => {
    const url = "/board";
    const boardList = await axiosClient.get(url, { params });
    return boardList;
  },
  POST_createNewBoard: async (board) => {
    const url = "/board/add";
    return axiosClient.post(url, board);
  },
  POST_removeBoard: async (board) => {
    const url = "/board/remove";
    return axiosClient.post(url, board);
  },
};

export default boardAPI;
