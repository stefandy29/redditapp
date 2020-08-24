import React, { Component } from "react";
import Tombol from "../../Tombol/Tombol";
import cssmodule from "../SubmitComment/SubmitComment.module.css";
import { withRouter } from "react-router-dom";
class SubmitComment extends Component {
  state = {
    comment: {
      value: this.props.usernameComment 
    },
    isEmptied: true
  };

  inputChange = event => {
    const updateComment = {
      ...this.state.comment
    };
    updateComment.value = event.target.value;
    this.setState({ comment: updateComment });
    if (event.target.value === "") {
      this.setState({ isEmptied: true });
    } else {
      this.setState({ isEmptied: false });
    }
  };

  continueComment = event => {
    event.preventDefault();
    const commentValue = this.state.comment.value;
    const indexCom = this.props.indexComment;
    const tz = Date();

    const listComment = {
      vote: 1,
      time: tz,
      username: Math.random()
        .toFixed(8)
        .substr(2, 10),
      comment: commentValue,
      codecomment: Math.random()
        .toString(36)
        .substring(2, 12),
      indexCommentChild: indexCom
    };
    if (!this.state.isEmptied) {
      fetch(
        `https://redditclone-project.firebaseio.com/data/${this.props.datakey}/commentz/com${this.props.indexComment}.json`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(listComment)
        }
      )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      const oldCount = this.props.indexComment;
      const newCount = oldCount + 1;
      const newIndex = newCount;
      fetch(
        `https://redditclone-project.firebaseio.com/data/${this.props.datakey}/indexComment.json`,
        {
          method: "put",
          body: JSON.stringify(newIndex),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      alert("Your Comment is Submitted");
      window.location.reload(true);
    } else {
      alert("Please fill the data");
    }
  };

  render() {
    let datacomment = (
      <div>
        <div>
          <textarea
            placeholder="Your Comment"
            cols="45"
            rows="4"
            onChange={this.inputChange}
            value={this.state.comment.value}
          ></textarea>
        </div>
        <Tombol tombol={this.continueComment}>Submit</Tombol>
      </div>
    );
    return (
      <div className={cssmodule.SubmitComment}>
        <div>{datacomment}</div>
      </div>
    );
  }
}

export default withRouter(SubmitComment);
