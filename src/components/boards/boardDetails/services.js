import api from "./api";

const services = {
  GET_allItems: async (idBoard) => {
    return await api.GET_allItems(idBoard);
  },
  POST_addItem: (idBoard, item) => {
    return api.POST_addItem(idBoard, item);
  },
  POST_removeItem: (idBoard, id) => {
    return api.POST_removeItem(idBoard, id);
  },
};

export default services;
