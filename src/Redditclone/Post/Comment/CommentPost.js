import React, { Component } from "react";
import { Link } from "react-router-dom";
import cssmodule from "../Post.module.css";
import UpVotePost from "../upVotePost/upVotePost";
import DownVotePost from "../downVotePost/downVotePost";
import LogoCompany from "../../UI/Logo/LogoCompany";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import Para from "../Para/Para";
import CommentPostData from "./CommentPostData/CommentPostData";
import SubmitComment from "../../Submit/SubmitComment/SubmitComment";
import LogoReply from "../../UI/LogoReply/LogoReply";
import CommentReplyMobile from "./CommentReplyMobile/CommentReplyMobile";
class CommentPost extends Component {
  state = {
    dataList: [],
    isComment: false,
    para: true,
    toggleButton: true,
    comment: true,
    toggleComment: false,
    toggleVote: true,
    valueReply: "",
    replyCom: true,
    replyMobileBtn: true,
    replyMobileCom: true,
  };

  componentDidMount() {
    fetch(
      `https://redditclone-project.firebaseio.com/data/${this.props.datakey}/dataList.json`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const fetchedComment = [];
        for (let key in res) {
          fetchedComment.push({
            ...res[key],
            id: key,
          });
        }
        this.setState({ dataList: fetchedComment });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  paraToggleHandler = () => {
    this.setState((prevState) => {
      return { para: !prevState.para, toggleButton: !prevState.toggleButton };
    });
  };

  buttonToggleHandler = () => {
    this.setState((prevState) => {
      return { toggleButton: !prevState.toggleButton };
    });
  };

  buttonToggleComment = () => {
    this.setState((prevState) => {
      return { toggleComment: !prevState.toggleComment };
    });
  };

  buttonReplyComment = () => {
    this.setState((prevState) => {
      return {
        replyMobileBtn: !prevState.replyMobileBtn,
        replyMobileCom: !prevState.replyMobileCom,
      };
    });
  };

  render() {
    let arrayCom = [];
    for (let keys in this.props.commentz) {
      arrayCom.push({
        id: keys,
        datacom: this.props.commentz[keys],
      });
    }
    let comPost = arrayCom.map((com) => {
      return (
        <CommentPostData
          commentz={this.props.commentz}
          datakey={this.props.datakey}
          indexComment={this.props.indexComment}
          username={this.props.username}
          indexCom={com.datacom.indexCommentChild}
          key={com.datacom.id}
          vote={com.datacom.vote}
          comment={com.datacom.comment}
          time={com.datacom.time}
          usernameComment={com.datacom.username}
          click={this.buttonReplyComment}
          show={this.state.replyMobileCom}
        />
      );
    });

    let postData = (
      <div className={cssmodule.Post}>
        <div className={cssmodule.VoteBox}>
          <UpVotePost
            dataList={this.props.dataList}
            key={this.props.id}
            vote={this.props.vote}
            datakey={this.props.datakey}
          />
          <p>{this.props.vote}</p>
          <DownVotePost
            dataList={this.props.dataList}
            key={this.props.id}
            vote={this.props.vote}
            datakey={this.props.datakey}
          />
          <div className={cssmodule.PostLogo}>
            <LogoCompany />
          </div>
        </div>
        <div className={cssmodule.PostThread}>
          <label>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/r/${this.props.dataList.subreddit.toLowerCase()}/comment/${
                this.props.code
              }/${this.props.dataList.title
                .replace(/ /g, "_")
                .substring(0, 40)}/`}
            >
              {this.props.dataList.title}{" "}
            </Link>
            <Link to={"/r/" + this.props.dataList.subreddit.toLowerCase()}>
              <label className={cssmodule.PostSubreddit}>
                (self.{this.props.dataList.subreddit.toLowerCase()})
              </label>
            </Link>
            <div className={cssmodule.PostDesc}>
              <div className={cssmodule.PostDescComment}>
                <p>
                  &#8593; {this.props.vote}
                  {" Points, "} submited at {this.props.time} by{" "}
                  {this.props.username} to{" "}
                  <Link
                    to={"/r/" + this.props.dataList.subreddit.toLowerCase()}
                  >
                    <label
                      style={({ cursor: "pointer" }, { fontSize: "12px" })}
                    >
                      /r/{this.props.dataList.subreddit.toLowerCase()}
                    </label>
                  </Link>{" "}
                </p>
                <p>
                  <Link
                    to={`/r/${this.props.dataList.subreddit.toLowerCase()}/comment/${
                      this.props.code
                    }/${this.props.dataList.title
                      .replace(/ /g, "_")
                      .substring(0, 40)}/`}
                  >
                    comments
                  </Link>
                </p>
              </div>
              <div className={cssmodule.PostDescComment2}>
                <p>
                  {" "}
                  <label>&#8593;</label> {this.props.vote}
                  {" Points "}
                  {this.props.time.substring(4, 24)}
                </p>
              </div>
            </div>
          </label>
          <div>
            <div className={cssmodule.ToggleButton}>
              <ToggleButton
                clicked={this.paraToggleHandler}
                show={this.state.toggleButton}
              />
            </div>
            <div className={cssmodule.Para}>
              <Para
                show={this.state.para}
                paragraph={this.props.dataList.paragraph}
              />
            </div>
          </div>
        </div>
        <p className={cssmodule.VoteMedia}>
          <label>
            <UpVotePost
              dataList={this.props.dataList}
              key={this.props.id}
              vote={this.props.vote}
              datakey={this.props.datakey}
            />
          </label>
          <label>
            <DownVotePost
              dataList={this.props.dataList}
              key={this.props.id}
              vote={this.props.vote}
              datakey={this.props.datakey}
            />
          </label>
        </p>
      </div>
    );
    return (
      <div>
        <div>{postData}</div>
        <div className={cssmodule.AllComment}>All Comment</div>
        <div className={cssmodule.SubmitComment}>
          <SubmitComment
            className={cssmodule.SubmitComment}
            datakey={this.props.datakey}
            indexComment={this.props.indexComment}
            usernameComment={""}
          />
        </div>
        {comPost}
        <LogoReply
          clicked={this.buttonReplyComment}
          show={this.state.replyMobileBtn}
        />
        <CommentReplyMobile
          click={this.buttonReplyComment}
          show={this.state.replyMobileCom}
        >
          <SubmitComment
            datakey={this.props.datakey}
            indexComment={this.props.indexComment}
            usernameComment={""}
          />
        </CommentReplyMobile>
      </div>
    );
  }
}

export default CommentPost;
