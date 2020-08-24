import React, { Component } from "react";
import cssmodule from "../downVotePost/downVotePost.module.css";
class downVotePost extends Component {
  state = {
    isDownVoted: true
  };

  downVoteButton = event => {
    event.preventDefault();
    const oldCount = this.props.vote;
    const newCount = oldCount - 1;
    const newVote = newCount;
    if (this.props.vote > 0) {
      fetch(
        `https://redditclone-project.firebaseio.com/data/${this.props.datakey}/vote.json`,
        {
          method: "put",
          body: JSON.stringify(newVote),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
    } else {
      console.log("Vote Already 0");
      return null;
    }
    console.log("Man, Please dont downvote this post");

    this.setState(prevState => {
      return { isDownVoted: !prevState.isDownVoted };
    });
  };
  render() {
    return (
      <div className={cssmodule.downVotePost}>
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

export default downVotePost;
