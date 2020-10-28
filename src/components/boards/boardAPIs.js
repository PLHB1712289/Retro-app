import axiosClient from "../../api/axiosClient";

const boardAPI = {
  getAll: async (params) => {
    const url = "/board";
    const boardList = await axiosClient.get(url, { params });

    return boardList;
  },
};

export default boardAPI;
