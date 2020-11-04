import axiosClient from "../../../api/axiosClient";

const GET_allItems = async (boardID) => {
  const url = `/board/${boardID}`;

  const { listItems, title, description } = await axiosClient.get(url);

  //
  const response = {
    title,
    description,
    listItemsWentWell: [],
    listItemsToImprove: [],
    listItemsActionItems: [],
  };

  for (let i = 0; i < listItems.length; i++) {
    const { content, _id: id } = listItems[i];
    console.log("id ", id);
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

  console.log(response);

  return response;
};

const POST_addItem = (idBoard, item) => {
  const url = `/board/${idBoard}/add-item`;
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
  POST_removeItem,
};

export default register;
