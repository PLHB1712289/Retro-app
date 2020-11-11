import axiosClient from "../../../api/axiosClient";

const GET_allItems = async (boardID) => {
  const url = `/board/${boardID}`;

  const { success, message, boardItems } = await axiosClient.get(url);

  if (success) {
    const { title, listItems } = boardItems;

    //
    const response = {
      title,
      listItemsWentWell: [],
      listItemsToImprove: [],
      listItemsActionItems: [],
    };

    for (let i = 0; i < listItems.length; i++) {
      const { content, _id: id } = listItems[i];

      switch (listItems[i].tag) {
        case 1:
          response.listItemsWentWell.push({ content, id });
          break;
        case 2:
          response.listItemsToImprove.push({ content, id });
          break;
        case 3:
          response.listItemsActionItems.push({ content, id });
          break;
        default:
          break;
      }
    }

    return response;
  } else {
    return message;
  }
};

const POST_addItem = (idBoard, item) => {
  const url = `/board/${idBoard}/add-item`;
  return axiosClient.post(url, item);
};

const POST_changeItem = (idBoard, item) => {
  const url = `/board/${idBoard}/change-item`;
  return axiosClient.post(url, item);
};

const POST_removeItem = (idBoard, id) => {
  const url = `/board/${idBoard}/remove-item`;
  return axiosClient.post(url, id);
};

// =======================================================================
// register
const register = {
  GET_allItems,
  POST_addItem,
  POST_changeItem,
  POST_removeItem,
};

export default register;
