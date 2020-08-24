import React from "react";
import cssmodule from "../Comment/CommentData.module.css";
const CommentData = props => {
  let comment = props.comment;

  return (
    <p
      className={cssmodule.CommentData}
      style={{
        display: props.show ? "none" : ""
      }}
    >
      {comment}
    </p>
  );
};

export default CommentData;
