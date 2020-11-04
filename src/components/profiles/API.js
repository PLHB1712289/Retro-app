import axiosClient from "../../api/axiosClient";

const API = {
  GET_userInfo: async () => {
    const url = "/user";
    return await axiosClient.get(url);
  },
  POST_changeUserInfo: async (user) => {
    const url = "/user";
    return await axiosClient.post(url, user);
  },
  POST_changePassword: async (oldPass, newPass) => {
    const url = "user/change-password";
    return await axiosClient.post(url, { oldPass, newPass });
  },
};

export default API;
