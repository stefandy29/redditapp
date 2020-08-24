import React from "react";
import cssmodule from "../Tombol/Tombol.module.css";
const Tombol = props => (
  <button
    className={cssmodule.Tombol}
    onClick={props.tombol}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Tombol;
