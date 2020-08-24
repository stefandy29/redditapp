import React, { Component } from "react";
import cssmodule from "../ToggleButton/ToggleButton.module.css";

class ToggleButton extends Component {
  render() {
    return (
      <div
        className={cssmodule.ToggleButton}
        onClick={this.props.clicked}
        style={{
          backgroundColor: this.props.show
            ? "rgba(161, 161, 161, 0.863)"
            : "tomato"
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default ToggleButton;
