import React, { Component } from "react";
import cssmodule from "../../Post.module.css";
import UpVoteComment from "../UpVoteComment/UpVoteComment";
import DownVoteComment from "../DownVoteComment/DownVoteComment";
import HideComment from "../../../UI/HideComment/HideComment";
import CommentData from "../Comment/CommentData";
import ToggleReply from "../ShowReplyComment/ToggleReply";
import ShowReplyComment from "../ShowReplyComment/ShowReplyComment";
class CommentPostData extends Component {
  state = {
    dataList: [],
    isComment: false,
    para: true,
    toggleButton: true,
    comment: true,
    toggleComment: false,
    toggleVote: true,
    valueReply: "",
    replyCom: true
  };

  paraToggleHandler = () => {
    this.setState(prevState => {
      return { para: !prevState.para, toggleButton: !prevState.toggleButton };
    });
  };

  buttonToggleHandler = () => {
    this.setState(prevState => {
      return { toggleButton: !prevState.toggleButton };
    });
  };

  buttonToggleComment = () => {
    this.setState(prevState => {
      return { toggleComment: !prevState.toggleComment };
    });
  };
  buttonToggleVote = () => {
    this.setState(prevState => {
      return { toggleVote: !prevState.toggleVote };
    });
  };

  buttonToggleReply = () => {
    this.setState(prevState => {
      return { replyCom: !prevState.replyCom };
    });
  };

  render() {
    let arrCom = (
      <div key={this.props.id} className={cssmodule.CommentPost}>
        <div className={cssmodule.Comment}>
          <div className={cssmodule.VoteCommentButton}>
            <UpVoteComment
              key={this.props.id}
              vote={this.props.vote}
              datakey={this.props.datakey}
              indexCom={this.props.indexCom}
            />
            <DownVoteComment
              key={this.props.id}
              vote={this.props.vote}
              datakey={this.props.datakey}
              indexCom={this.props.indexCom}
            />
          </div>
          <div className={cssmodule.CommentVote}>
            <div
              className={cssmodule.CommentDesc}
              style={{
                fontStyle: this.state.toggleComment ? "italic" : "normal"
              }}
            >
              <label>
                <HideComment
                  className={cssmodule.HideComment}
                  clicked={this.buttonToggleComment}
                  show={this.state.toggleComment}
                />
              </label>
              <label style={{ color: "blue" }}>
                Anonymous|{this.props.usernameComment}{" "}
              </label>{" "}
              <label>{this.props.vote} Points</label>
              <label className={cssmodule.CommentTime}>
                , Submited at {this.props.time}{" "}
              </label>
              <label className={cssmodule.CommentTime2}>
                , {this.props.time.substring(4, 24)}{" "}
              </label>
            </div>
            <div>
              <CommentData
                comment={this.props.comment}
                usernameComment={this.props.usernameComment}
                show={this.state.toggleComment}
              />
            </div>
            <div>
              <ToggleReply clicked={this.buttonToggleReply} />
            </div>
            <div className={cssmodule.VoteCommentButton2}>
              <UpVoteComment
                key={this.props.id}
                vote={this.props.vote}
                datakey={this.props.datakey}
                indexCom={this.props.indexCom}
              />
              <DownVoteComment
                key={this.props.id}
                vote={this.props.vote}
                datakey={this.props.datakey}
                indexCom={this.props.indexCom}
              />
              <div>
                <div
                  onClick={this.buttonToggleReply}
                  style={{ cursor: "pointer" }}
                >
                  &#9993;
                </div>
              </div>
            </div>
            <ShowReplyComment
              show={this.state.replyCom}
              datakey={this.props.datakey}
              indexComment={this.props.indexComment}
              usernameComment={this.props.usernameComment}
            />
          </div>
        </div>
      </div>
    );
    return <div>{arrCom}</div>;
  }
}

export default CommentPostData;
