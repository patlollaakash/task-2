import React from "react";
import { Tooltip } from "react-tooltip";

const CustomTooltip = ({ content }) => {
  return (
    <Tooltip
      id="my-tooltip"
      place="top"
      effect="solid"
      style={{
        backgroundColor: "red",
        color: "white",
        borderRadius: "5px",
        padding: "5px",
        zIndex: 10,
      }}
    >
      {content}
    </Tooltip>
  );
};

export default CustomTooltip;
