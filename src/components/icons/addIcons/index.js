import React from "react";
import { ReactComponent as AddIconSVG } from "./add.svg";

const AddIcon = ({ size, backgroundColor, onClickIcon }) => {
  return (
    <span
      style={{ display: "flex", alignItems: "center" }}
      onClick={() => onClickIcon()}
    >
      <AddIconSVG
        style={{
          width: `${size}`,
          height: `${size}`,
          backgroundColor: `${backgroundColor}`,
          cursor: "pointer",
          padding: 5,
          borderRadius: 5,
        }}
      />
    </span>
  );
};

export default AddIcon;
