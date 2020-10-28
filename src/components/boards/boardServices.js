import boardAPIs from "./boardAPIs";

const boardServices = {
  getAll: async () => {
    return await boardAPIs.getAll();
  },
};

export default boardServices;
