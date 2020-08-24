import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { Link } from "react-router-dom";
import cssmodule from "../SubList/Sublist.module.css";
class Sublist extends Component {
  state = {
    dataList: [],
    indexSub: 3,
    moreClicked: true,
    toolbarSubreddit: false
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

  moreIndex = () => {
    const oldIndex = 12;
    this.setState({ indexSub: oldIndex, moreClicked: false });
  };

  buttonToolbarSub = () => {
    this.setState(prevState => {
      return { toolbarSubreddit: !prevState.toolbarSubreddit };
    });
  };
  render() {
    const uniquez = [
      ...new Set(
        this.state.dataList.map(data => data.dataList.subreddit.toLowerCase())
      )
    ];
    const sortFiltz = uniquez.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    const index = this.state.indexSub;
    const filtz = sortFiltz.slice(0, index).map(data => {
      return (
        <label key={data}>
          <Link
            to={"/r/" + data}
            style={{ textDecoration: "none", color: "black" }}
          >
            /r/{data}
          </Link>
          <label>{" - "}</label>
        </label>
      );
    });
    const filtMenu = sortFiltz.map(data => {
      return (
        <ul key={data}>
          <li>
            <Link
              onClick={this.buttonToolbarSub}
              className={cssmodule.Toolbar}
              to={"/r/" + data}
              style={{ textDecoration: "none", color: "black" }}
            >
              /r/{data}
            </Link>
          </li>
        </ul>
      );
    });
    return (
      <div className={cssmodule.Sublist}>
        <label onClick={this.buttonToolbarSub} style={{ cursor: "pointer" }}>
          SubredditList
        </label>
        {" | "}
        {filtz}
        {"     "}
        <label
          onClick={this.moreIndex}
          style={{ display: this.state.moreClicked ? "" : "none" }}
        >
          more
        </label>
        {" | "} <label style={{ fontSize: "12px" }}></label>
        <div
          style={{ display: this.state.toolbarSubreddit ? "inherit" : "none" }}
          className={cssmodule.ToolbarSub}
        >
          <div>{filtMenu}</div>
        </div>
      </div>
    );
  }
}

export default Sublist;
