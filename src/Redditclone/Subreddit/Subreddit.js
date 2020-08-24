import React, { Component } from "react";
import Post from "../Post/Post";

import fetch from "isomorphic-fetch";
import Kids from "../UI/kids";

class Subreddit extends Component {
  state = {
    dataList: [],
    hari: "",
    load: false,
    submit: false
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let postData = (
      <div>
        {this.state.dataList
          .sort((a, b) => a - b)
          .reverse()
          .map((data, index) => {
            return (
              <div key={data.id}>
                <Post
                  number={index}
                  key={data.id}
                  dataList={data.dataList}
                  vote={data.vote}
                  time={data.time}
                  subreddit={data.dataList.subreddit}
                  datakey={data.id}
                  code={data.code}
                  indexComment={data.indexComment}
                  username={data.username}
                ></Post>
              </div>
            );
          })}
      </div>
    );

    return (
      <div>
        <Kids>{postData}</Kids>
      </div>
    );
  }
}

export default Subreddit;
