const TAG_SOCKET_IO = {
  JOIN_ROOM: "join_room",
  REQUEST_CREATE: "request_create",
  REQUEST_REMOVE: "request_remove",
  REQUEST_EDIT: "request_edit",
  REQUEST_DND: "request_dnd",
  REQUEST_FOCUS_ITEM: "request_focus_item",
  REQUEST_CANCEL_FOCUS_ITEM: "request_cancel_focus_item",
  RESPONSE_CREATE: "response_create",
  RESPONSE_REMOVE: "response_remove",
  RESPONSE_EDIT: "response_edit",
  RESPONSE_DND: "response_dnd",
  RESPONSE_FOCUS_ITEM: "response_focus_item",
  RESPONSE_CANCEL_FOCUS_ITEM: "response_cancel_focus_item",
};

const CATEGORY = {
  WENTWELL: {
    TITLE: "went well",
    COLOR: "#00dd77",
    TAG: 1,
  },
  TOIMPROVE: {
    TITLE: "to improve",
    COLOR: "#fbc02d",
    TAG: 2,
  },
  ACTIONITEMS: {
    TITLE: "action items",
    COLOR: "rgba(142,36,170,0.3)",
    TAG: 3,
  },
};

const DATA = { CATEGORY: { ...CATEGORY }, TAG_SOCKET_IO: { ...TAG_SOCKET_IO } };

module.exports = DATA;
