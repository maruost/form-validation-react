import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

function Form(props) {
  return (
    <div className="popup">
      <div className="popup__content">
        <h3 className="popup__title">{props.title}</h3>
        <div className="popup__subtitle">
          <p className="popup__text">{props.subtitle}</p>
          <button className="button button_entry">{props.signInBtn}</button>
        </div>
        <form
          className="popup__form"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default Form;
