import React from "react";
import Kids from "../UI/kids";
import cssmodule from "../Submit/Submitbox.module.css";
import Dropback from "../UI/Dropback/Dropback";
const Submitbox = props => {
  return (
    <Kids>
      <Dropback show={props.show} click={props.click} />
      <div
        className={cssmodule.Submitbox}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
          overflowY: props.show ? "hidden" : "hidden"
        }}
      >
        {" "}
        {props.children}
      </div>
    </Kids>
  );
};

export default Submitbox;
