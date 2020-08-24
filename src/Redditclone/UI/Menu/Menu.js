import React, { Component } from "react";
import Kids from "../kids";
import Sublist from "../../SubList/Sublist";
import RightToolbar from "../RightToolbar/RightToolbar";
import cssmodule from "../Menu/Menu.module.css";
import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
  state = {
    submit: false
  };
  submitDataConfirm = () => {
    const submitData = !this.state.submit;
    this.setState({ submit: submitData });
    console.log(this.state.submit);
  };
  render() {
    return (
      <Kids>
        <div>
          <div className={cssmodule.Sublist}>
            <Sublist />
          </div>
          <div className={cssmodule.Menu}>
            {" "}
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              &#9876; RedditClone
            </Link>
            <Link to={"/submit"} className={cssmodule.MobileSubmit}>
              Submit &#9993;
            </Link>
          </div>
          <div className={cssmodule.Toolbar_Post}>
            <main>
              {this.props.children}
              <div className={cssmodule.Empty}></div>
            </main>
            <div className={cssmodule.RightToolbar}>
              <RightToolbar
                click={this.submitDataConfirm}
                show={this.state.submit}
              />
            </div>
          </div>
          <div className={cssmodule.footer}>Copyright</div>
        </div>
      </Kids>
    );
  }
}

export default withRouter(Menu);
