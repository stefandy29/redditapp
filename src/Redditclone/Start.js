import React, { Component } from "react";
import SubmitData from "./SubmitData/SubmitData";
import { Route, Switch, withRouter } from "react-router-dom";
import ShowPost from "./Post/ShowPost/ShowPost";
import Subreddit from "./Subreddit/Subreddit";
import Menu from "./UI/Menu/Menu";
import ShowPostComment from "./Post/Comment/ShowPostComment/ShowPostComment";
import cssmodule from "../../src/Redditclone/Start.module.css";

class Start extends Component {
  render() {
    return (
      <div className={cssmodule}>
        <Menu>
          {/*           <Switch>
            <Route
              path={"/r/:subreddit/comment/:commentid"}
              component={SubmitComment}
            />
            <Route path={"/r/:subreddit"} component={ShowPost} />
            <Route path={"/"} component={Subreddit} />
          </Switch> */}
          <Switch>
            <Route
              path={"/r/:subreddit/comment/:code/:title/"}
              component={ShowPostComment}
            />
            <Route path={"/r/:subreddit/"} component={ShowPost} />
            <Route path={"/submit/"} component={SubmitData} />
            <Route path={"/"} component={Subreddit} />
          </Switch>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Start);
