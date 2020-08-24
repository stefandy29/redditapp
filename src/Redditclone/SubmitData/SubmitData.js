import React, { Component } from "react";
import Submit from "../Submit/Submit";
import Tombol from "../Tombol/Tombol";
import fetch from "isomorphic-fetch";
import Kids from "../UI/kids";
import { withRouter } from "react-router-dom";
class SubmitData extends Component {
  state = {
    dataList: {
      title: {
        inputTitle: "input",
        inputData: {
          type: "text",
          placeholder: "Title"
        },
        value: "",
        validation: { required: true },
        valid: false
      },
      paragraph: {
        inputTitle: "textarea",
        inputData: {
          type: "text",
          placeholder: "Text"
        },
        value: "",
        validation: { required: true },
        valid: false
      },
      subreddit: {
        inputTitle: "subreddit",
        inputData: {
          type: "text",
          placeholder: "Subreddit"
        },
        value: "",
        validation: { required: true },
        valid: false
      }
    },
    isEmptied: false
  };

  continueTombol = event => {
    event.preventDefault();
    const dataPost = {};
    for (let formIdentifier in this.state.dataList) {
      dataPost[formIdentifier] = this.state.dataList[formIdentifier].value;
    }
    const tz = Date();
    const listdata = {
      dataList: dataPost,
      vote: 1,
      time: tz,
      code: Math.random()
        .toString(36)
        .substring(2, 12),
      username: Math.random()
        .toFixed(8)
        .substr(2, 10),
      indexComment: 0
    };

    if (this.state.isEmptied) {
      fetch("https://redditclone-project.firebaseio.com/data.json", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(listdata)
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      alert("Thank you For Posting");
      window.location.reload(true);
      this.props.history.replace("/");
    } else {
      alert("Please fill the data");
    }
  };

  checkValid(value, rules) {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    return isValid;
  }

  inputChange = (event, inputIdentifier) => {
    const updateddataList = {
      ...this.state.dataList
    };
    const updatedStatedataList = {
      ...updateddataList[inputIdentifier]
    };
    updatedStatedataList.value = event.target.value;
    updatedStatedataList.valid = this.checkValid(
      updatedStatedataList.value,
      updatedStatedataList.validation
    );
    updateddataList[inputIdentifier] = updatedStatedataList;
    let dataIsValid = true;
    for (let inputIdentifier in updateddataList) {
      dataIsValid = updateddataList[inputIdentifier].valid && dataIsValid;
    }
    this.setState({ dataList: updateddataList, isEmptied: dataIsValid });
    console.log(updatedStatedataList);
    console.log(dataIsValid);
  };

  render() {
    console.log(this.props);
    const arrayData = [];
    for (let key in this.state.dataList) {
      arrayData.push({
        id: key,
        data: this.state.dataList[key]
      });
    }
    let data = (
      <form>
        {arrayData.map(array => (
          <Submit
            key={array.id}
            inputTitle={array.data.inputTitle}
            inputData={array.data.inputData}
            changed={event => this.inputChange(event, array.id)}
            value={array.data.value}
          />
        ))}
        <Tombol tombol={this.continueTombol}>Submit</Tombol>
      </form>
    );
    return (
      <Kids>
        <div>
          <h4>Submit Your Post</h4>
          {data}
        </div>
        {this.props.children}
      </Kids>
    );
  }
}

export default withRouter(SubmitData);
