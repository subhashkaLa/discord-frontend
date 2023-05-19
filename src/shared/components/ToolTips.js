import React from "react";
import ReactTooltip from "rc-tooltip";

const ToolTips = ({
  id = Math.random() * 1000,
  position = "bottom",
  content,
  children,
}) => {
  return (
    <ReactTooltip
      id={id}
      overlay={content}
      placement={position}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      {children}
    </ReactTooltip>
  );
};

export default ToolTips;
