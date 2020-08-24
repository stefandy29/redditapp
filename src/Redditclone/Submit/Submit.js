import React from "react";
import Kids from "../UI/kids";
import cssmodule from "../Submit/Submit.module.css";
const Submit = props => {
  let inputList = null;
  switch (props.inputTitle) {
    case "input":
      inputList = (
        <div>
          <div>Title</div>
          <textarea
            maxLength="300"
            className={cssmodule.SubmitInput}
            {...props.inputData}
            onChange={props.changed}
            value={props.value}
          />
        </div>
      );
      break;
    case "textarea":
      inputList = (
        <div>
          <div>Text</div>
          <textarea
            className={cssmodule.SubmitTextarea}
            cols="75"
            rows="10"
            {...props.inputData}
            onChange={props.changed}
            value={props.value}
          />
        </div>
      );
      break;
    case "text":
      inputList = (
        <div>
          <input
            {...props.inputData}
            onChange={props.changed}
            value={props.value}
          />
        </div>
      );
      break;
    case "subreddit":
      inputList = (
        <div>
          <div>Subreddit</div>
          <input
            maxLength="20"
            className={cssmodule.SubmitSub}
            {...props.inputData}
            onChange={props.changed}
            value={props.value}
          />
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <Kids>
      <div className={cssmodule.Submit}>
        <ul>
          <li>{inputList}</li>
        </ul>
      </div>
    </Kids>
  );
};
export default Submit;
