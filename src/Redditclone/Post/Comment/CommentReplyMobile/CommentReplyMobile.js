import React from "react";
import cssmodule from "../CommentReplyMobile/CommentReplyMobile.module.css";
import Dropback from "../../../UI/Dropback/Dropback";
import Kids from "../../../UI/kids";

const CommentReplyMobile = props => (
  <div className={cssmodule.ReplyComment}>
    <Kids>
      <Dropback show={!props.show} click={props.click} />
      <div
        className={cssmodule.ReplyCommentMobile}
        style={{
          display: props.show ? "none" : "inherit"
        }}
      >
        {props.children}
      </div>
    </Kids>
  </div>
);

export default CommentReplyMobile;
