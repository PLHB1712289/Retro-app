import API from "./API";

const services = {
  getUserInfo: async () => {
    return await API.GET_userInfo();
  },
  changeUserInfo: async (user) => {
    return await API.POST_changeUserInfo(user);
  },
  changePassword: async (oldPass, newPass) => {
    return await API.POST_changePassword(oldPass, newPass);
  },
};

export default services;
