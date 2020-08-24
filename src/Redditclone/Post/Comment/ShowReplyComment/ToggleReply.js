import React from "react";
import cssmodule from "../../Post.module.css";

const ToggleReply = props => (
  <label className={cssmodule.ToggleReply} onClick={props.clicked}>
    reply
  </label>
);

export default ToggleReply;
