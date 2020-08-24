import React from "react";
import cssmodule from "../LogoReply/LogoReply.module.css";

const LogoReply = props => (
  <div
    className={cssmodule.Logo}
    onClick={props.clicked}
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)"
    }}
  >
    <i className="fa fa-pencil"></i>
  </div>
);

export default LogoReply;
