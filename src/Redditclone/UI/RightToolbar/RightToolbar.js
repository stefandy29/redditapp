import React, { Component } from "react";
import Submitbox from "../../Submit/Submitbox";
import SubmitData from "../../SubmitData/SubmitData";
import cssmodule from "../RightToolbar/RightToolbar.module.css";
class RightToolbar extends Component {
  render() {
    const submit = (
      <div onClick={this.props.click} style={{ cursor: "pointer" }}>
        Submit Your Post
      </div>
    );

    return (
      <div>
        <Submitbox show={this.props.show} click={this.props.click}>
          <SubmitData />
        </Submitbox>
        <div className={cssmodule.RightToolbar}>
          <div className={cssmodule.Submit}>{submit}</div>
        </div>
      </div>
    );
  }
}

export default RightToolbar;
