import React, { useState } from "react";
import { useDrag } from "react-dnd";

import ViewItem from "./viewItem";
import EditItem from "./editItem";
import STATE_ITEM from "./data";

const Item = ({
  color,
  item,
  onRemove,
  onChange,
  onDnD,
  onFocus,
  onCancelFocus,
}) => {
  const { content, id, tag, focus } = item;
  const [stateItem, setStateItem] = useState(STATE_ITEM.DEFAULT);

  const handleChangeStateItem = (newState) => {
    if (focus) {
      return;
    }

    setStateItem(newState);
    onFocus(id, tag);
  };

  const changeItemDnd = (item, newTag) => {
    // Send request to socket
    onDnD(item.id, item.tag, newTag);
  };

  const [{ isDragging }, drag] = useDrag({
    item: { id, tag, type: "Hello" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult && !focus) {
        console.log("dropResult:", dropResult);
        if (item.tag === dropResult.tag) return;

        switch (dropResult.tag) {
          case 1:
            changeItemDnd(item, 1);
            break;
          case 2:
            changeItemDnd(item, 2);
            break;
          case 3:
            changeItemDnd(item, 3);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  if (isDragging && !focus) {
    // alert("focus");
    onFocus(id, tag);
  }

  let view;
  switch (stateItem) {
    case STATE_ITEM.VIEW:
      view = (
        <ViewItem
          drag={drag}
          color={color}
          content={content}
          onFocus={focus}
          onChangeState={handleChangeStateItem}
        />
      );
      break;

    case STATE_ITEM.EDIT:
      view = (
        <EditItem
          item={item}
          color={color}
          onChangeState={handleChangeStateItem}
          onRemove={onRemove}
          onChange={onChange}
          onCancelFocus={onCancelFocus}
        />
      );
      break;

    default:
      break;
  }

  return <>{view}</>;
};

export default Item;
