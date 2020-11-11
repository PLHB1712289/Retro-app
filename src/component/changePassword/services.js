import API from "./API";

const services = {
  changePassword: (oldPass, newPass) => {
    return API.POST_changePassword(oldPass, newPass);
  },
};

export default services;
