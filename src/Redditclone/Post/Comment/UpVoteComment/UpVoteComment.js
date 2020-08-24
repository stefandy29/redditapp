import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import cssmodule from "../UpVoteComment/UpVoteComment.module.css";
class UpVoteComment extends Component {
  state = {
    isUpVoted: true
  };
  upVoteButton = () => {
    const oldCount = this.props.vote;
    const newCount = oldCount + 1;
    const newVote = newCount;
    fetch(
      `https://redditclone-project.firebaseio.com/data/${this.props.datakey}/commentz/com${this.props.indexCom}/vote.json`,
      {
        method: "put",
        body: JSON.stringify(newVote),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    console.log("Thanks for Vote ");
    this.setState(prevState => {
      return { isUpVoted: !prevState.isUpVoted };
    });
  };

  render() {
    return (
      <div className={cssmodule.UpVoteComment}>
        <div
          onClick={this.upVoteButton}
          style={{
            color: this.state.isUpVoted
              ? "color: rgba(59, 59, 59, 0.76)"
              : "red"
          }}
        >
          &#9650;
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(UpVoteComment);
