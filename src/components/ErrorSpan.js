import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Form from "./Form";
import errorMessages from "../constants/constants";

function ErrorSpan(props) {
  return (
    <span className="popup__error" data-for={props.type}>
      {props.message}
    </span>
  );
}

export default ErrorSpan;
