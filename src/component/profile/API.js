import axiosClient from "../../api/axiosClient";

const API = {
  GET_userInfo: () => {
    const url = "/user";
    return axiosClient.get(url);
  },
  POST_changeUserInfo: (user) => {
    const url = "/user";
    return axiosClient.post(url, user);
  },
};

export default API;
