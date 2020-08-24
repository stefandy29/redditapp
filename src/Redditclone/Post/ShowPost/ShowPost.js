import React, { Component } from "react";
import Post from "../Post";
import { withRouter } from "react-router-dom";
class ShowPost extends Component {
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
        console.log(res);
        const fetchedListData = [];
        for (let key in res) {
          fetchedListData.push({
            ...res[key],
            id: key
          });
        }
        this.setState({ dataList: fetchedListData });
        console.log("datalist =" + res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let postData = null;
    if (this.state.dataList !== null) {
      postData = (
        <div>
          {this.state.dataList
            .sort((a, b) => a - b)
            .reverse()
            .map((data, index) => {
              if (
                this.props.history.location.pathname ===
                `/r/${data.dataList.subreddit.toLowerCase()}`
              ) {
                return (
                  <Post
                    number={index}
                    key={data.id}
                    dataList={data.dataList}
                    vote={data.vote}
                    time={data.time}
                    subreddit={data.dataList.subreddit}
                    code={data.code}
                    indexComment={data.indexComment}
                    username={data.username}
                  ></Post>
                );
              } else return null;
            })}
        </div>
      );
    } else return <div>Post Not Found</div>;
    return (
      <div>
        <div>{postData}</div>
      </div>
    );
  }
}

export default withRouter(ShowPost);
