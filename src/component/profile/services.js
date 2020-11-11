import API from "./API";

const services = {
  getUserInfo: () => {
    return API.GET_userInfo();
  },
  changeUserInfo: (user) => {
    return API.POST_changeUserInfo(user);
  },
};

export default services;
