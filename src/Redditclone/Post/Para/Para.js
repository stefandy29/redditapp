import React from "react";
import cssmodule from "../Para/Para.module.css";
const Para = props => (
  <p
    className={cssmodule.Para}
    style={{
      display: props.show ? "none" : ""
    }}
  >
    {props.paragraph}
  </p>
);

export default Para;
