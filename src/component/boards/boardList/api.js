import axiosClient from "../../../api/axiosClient";

const boardAPI = {
  GET_allBoard: (params) => {
    const url = "/board";
    return axiosClient.get(url, { params });
  },
  POST_createNewBoard: (board) => {
    const url = "/board/add";
    return axiosClient.post(url, board);
  },
  POST_changeBoard: (board) => {
    const url = "/board/change";
    return axiosClient.post(url, board);
  },
  POST_removeBoard: (board) => {
    const url = "/board/remove";
    return axiosClient.post(url, board);
  },
  POST_shareBoard: (id, email) => {
    const url = "/board/share";
    return axiosClient.post(url, { id, email });
  },
};

export default boardAPI;
