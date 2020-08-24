import React, { Component } from "react";
import cssmodule from "../DownVoteComment/DownVoteComment.module.css";
class DownVoteComment extends Component {
  state = {
    isDownVoted: true
  };

  downVoteButton = event => {
    event.preventDefault();
    const oldCount = this.props.vote;
    const newCount = oldCount - 1;
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
      
    console.log("Man, Please dont downvote this post");

    this.setState(prevState => {
      return { isDownVoted: !prevState.isDownVoted };
    });
  };
  render() {
    return (
      <div className={cssmodule.DownVoteComment}>
        <div
          onClick={this.downVoteButton}
          style={{
            color: this.state.isDownVoted
              ? "color: rgba(59, 59, 59, 0.76)"
              : "aqua"
          }}
        >
          &#9660;
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DownVoteComment;
