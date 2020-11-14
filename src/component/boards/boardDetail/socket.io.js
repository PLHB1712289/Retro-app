const TAG_SOCKET_IO = {
  JOIN_ROOM: "join_room",
  REQUEST_CREATE: "request_create",
  REQUEST_REMOVE: "request_remove",
  REQUEST_EDIT: "request_edit",
  RESPONSE_CREATE: "response_create",
  RESPONSE_REMOVE: "response_remove",
  RESPONSE_EDIT: "response_edit",
};

const setupSocket = ({
  category,
  wentWell,
  toImprove,
  actionItems,
  setActionItems,
  setToImprove,
  setWentWell,
  socket,
  idBoard,
}) => {
  socket.emit(TAG_SOCKET_IO.JOIN_ROOM, idBoard);

  // Setup event Receive data from server
  socket.on(TAG_SOCKET_IO.RESPONSE_CREATE, ({ id, tag, content }) => {
    switch (tag) {
      case category.wentWell.tag: {
        const newListItem = wentWell.map((item) => {
          return { ...item };
        });
        newListItem.push({ id, content });
        console.log("wentWell", newListItem);
        setWentWell(newListItem);
        break;
      }

      case category.toImprove.tag: {
        const newListItem = toImprove.map((item) => {
          return { ...item };
        });
        newListItem.push({ id, content });
        setToImprove(newListItem);
        break;
      }

      case category.actionItems.tag: {
        const newListItem = actionItems.map((item) => {
          return { ...item };
        });
        newListItem.push({ id, content });
        setActionItems(newListItem);
        break;
      }

      default:
        break;
    }
  });

  socket.on(TAG_SOCKET_IO.RESPONSE_REMOVE, ({ id, tag }) => {
    switch (tag) {
      case category.wentWell.tag:
        setWentWell(wentWell.filter((item) => item.id !== id));
        break;

      case category.toImprove.tag:
        setToImprove(toImprove.filter((item) => item.id !== id));
        break;

      case category.actionItems.tag:
        setActionItems(actionItems.filter((item) => item.id !== id));
        break;

      default:
        break;
    }
  });

  socket.on(TAG_SOCKET_IO.RESPONSE_EDIT, ({ id, tag, content }) => {
    switch (tag) {
      case category.wentWell.tag:
        setWentWell(
          wentWell.map((item) => (item.id === id ? { ...item, content } : item))
        );
        break;

      case category.toImprove.tag:
        setToImprove(
          toImprove.map((item) =>
            item.id === id ? { ...item, content } : item
          )
        );
        break;

      case category.actionItems.tag:
        setActionItems(
          actionItems.map((item) =>
            item.id === id ? { ...item, content } : item
          )
        );
        break;

      default:
        break;
    }
  });
};

module.exports = { setupSocket, TAG_SOCKET_IO };
