import React, { useState } from "react";
import ViewItem from "./viewItem";
import EditItem from "./editItem";

import STATE_ITEM from "./data";

const Item = ({ color, id, content, onRemove, onChange }) => {
  const [stateItem, setStateItem] = useState(STATE_ITEM.DEFAULT);

  const handleChangeStateItem = (newState) => {
    setStateItem(newState);
  };

  let view;
  switch (stateItem) {
    case STATE_ITEM.VIEW:
      view = (
        <ViewItem
          color={color}
          content={content}
          onChangeState={handleChangeStateItem}
        />
      );
      break;

    case STATE_ITEM.EDIT:
      view = (
        <EditItem
          id={id}
          color={color}
          content={content}
          onChangeState={handleChangeStateItem}
          onRemove={onRemove}
          onChange={onChange}
        />
      );
      break;

    default:
      break;
  }

  return <>{view}</>;
};

export default Item;
