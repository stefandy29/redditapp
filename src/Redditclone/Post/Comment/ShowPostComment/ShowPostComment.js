import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CommentPost from "../CommentPost";
class ShowPostComment extends Component {
  state = {
    dataList: [],
    hari: "",
    load: false
  };
  componentDidMount() {
    fetch("https://redditclone-project.firebaseio.com/data.json", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        const fetchedPostComment = [];
        for (let key in res) {
          fetchedPostComment.push({
            ...res[key],
            id: key
          });
        }
        this.setState({ dataList: fetchedPostComment });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let postData = (
      <div>
        {this.state.dataList.map((data, index) => {
          if (
            this.props.history.location.pathname ===
            `/r/${data.dataList.subreddit.toLowerCase()}/comment/${data.code.toLowerCase()}/${data.dataList.title
              .replace(/ /g, "_")
              .substring(0, 40)}/`
          )
            return (
              <CommentPost
                number={index}
                key={data.id}
                dataList={data.dataList}
                vote={data.vote}
                time={data.time}
                subreddit={data.dataList.subreddit}
                datakey={data.id}
                code={data.code}
                indexComment={data.indexComment}
                commentz={data.commentz}
                username={data.username}
              />
            );
        })}
      </div>
    );
    return <div>{postData}</div>;
  }
}

export default withRouter(ShowPostComment);
