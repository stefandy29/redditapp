import React from "react";
import UpVotePost from "./upVotePost/upVotePost";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { Component } from "react";
import DownVotePost from "./downVotePost/downVotePost";
import ToggleButton from "../UI/ToggleButton/ToggleButton";
import Para from "./Para/Para";
import cssmodule from "../Post/Post.module.css";
import LogoCompany from "../UI/Logo/LogoCompany";

class Post extends Component {
  state = {
    votePost: this.props.vote,
    para: true,
    toggleButton: true,
    dataSub: this.props.dataList.subreddit,
  };
  componentDidMount() {
    if (
      this.props.location.pathname === `/r/${this.props.dataList.subreddit}`
    ) {
      return this.props.match.params.id === this.props.location.pathname;
    }
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

  render() {
    const IDkey = [];
    for (let key in this.props.dataList) {
      IDkey.push({
        id: key,
        index: this.props.dataList[key],
      });
    }
    let parag = null;
    if (this.props.dataList.paragraph.length >= 250) {
      parag = this.props.dataList.paragraph.substring(0, 250) + "....";
    } else parag = this.props.dataList.paragraph;
    return (
      <div className={cssmodule.Post}>
        <div className={cssmodule.VoteBox}>
          <UpVotePost
            dataList={this.props.dataList}
            key={this.props.id}
            vote={this.props.vote}
            datakey={this.props.datakey}
          />
          <p style={{ color: "white" }}>{this.props.vote}</p>
          <DownVotePost
            dataList={this.props.dataList}
            key={this.props.id}
            vote={this.props.vote}
            datakey={this.props.datakey}
          />
          <div className={cssmodule.PostLogo}>
            <Link
              to={`/r/${this.props.dataList.subreddit.toLowerCase()}/comment/${
                this.props.code
              }`}
            >
              <LogoCompany />
            </Link>
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
              <p className={cssmodule.PostDesc0}>
                {" "}
                <label>&#8593;</label> {this.props.vote}{" "}
                {this.props.time.substring(4, 24)}
              </p>
              <div className={cssmodule.PostDescP}>
                <Link
                  className={cssmodule.PostDesc2}
                  to={`/r/${this.props.dataList.subreddit.toLowerCase()}/comment/${
                    this.props.code
                  }`}
                >
                  <p>{parag}</p>
                </Link>
              </div>

              <p className={cssmodule.PostDesc1}>
                submited at {this.props.time} by {this.props.username} to{" "}
                <Link to={"/r/" + this.props.dataList.subreddit.toLowerCase()}>
                  <label style={{ cursor: "pointer" }}>
                    /r/{this.props.dataList.subreddit.toLowerCase()}
                  </label>
                </Link>{" "}
              </p>
              <p className={cssmodule.PostDesc1}>
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
  }
}
export default withRouter(Post);
