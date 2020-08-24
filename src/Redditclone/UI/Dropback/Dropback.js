import React from "react";
import cssmodule from "../Dropback/Dropback.module.css";

const Dropback = props =>
  props.show ? (
    <div className={cssmodule.Dropback} onClick={props.click}></div>
  ) : null;

export default Dropback;
