import React from "react";
import SubmitComment from "../../../Submit/SubmitComment/SubmitComment";

const ShowReplyComment = props => {
  return (
    <div
      style={{
        display: props.show ? "none" : ""
      }}
    >
      <SubmitComment
        datakey={props.datakey}
        indexComment={props.indexComment}
        usernameComment={">>" + props.usernameComment + "\n"}
      />
    </div>
  );
};

export default ShowReplyComment;
