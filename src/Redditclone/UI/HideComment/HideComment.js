import React from "react";

const HideComment = props => {
  if (props.show) {
    return (
      <label
        onClick={props.clicked}
        style={({ fontSize: "15px" }, { cursor: "pointer" })}
      >
        {" (+) "}
      </label>
    );
  } else
    return (
      <label
        onClick={props.clicked}
        style={({ fontSize: "15px" }, { cursor: "pointer" })}
      >
        {" (-) "}
      </label>
    );
};

export default HideComment;
