import axiosClient from "../../api/axiosClient";

const API = {
  POST_changePassword: (oldPass, newPass) => {
    const url = "user/change-password";
    return axiosClient.post(url, { oldPass, newPass });
  },
};

export default API;
