import React from "react";
import { errorMessages } from "../constants/constants";
import isEmail from "validator/lib/isEmail";
import validator from "validator";

export const FormValidator = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrorMessage(target, name);
    setIsValid(target.closest("form").checkValidity());
  };

  function setErrorMessage(target, name) {
    if (target.validity.valid) {
      setErrors({ ...errors, [name]: "" });
    }

    if (target.validity.valueMissing) {
      if (target.name !== "lang") {
        setErrors({ ...errors, [name]: errorMessages.empty });
      } else {
        setErrors({ ...errors, [name]: errorMessages.takeLang });
      }
    }

    if (target.type === "email" && !validator.isEmail(target.value)) {
      console.log(validator.isEmail(target.value));
      setErrors({ ...errors, [name]: errorMessages.wrongEmail });
      console.log(errors);
    }

    if (target.validity.patternMismatch) {
      if (target.name === "user") {
        setErrors({ ...errors, [name]: errorMessages.wrongName });
      }
      if (target.type === "tel") {
        setErrors({ ...errors, [name]: errorMessages.wrongTelFormat });
      }
    } 

    // else {
    //   setErrors({ ...errors, [name]: target.validationMessage });
    // }
  }
  return { values, handleChange, errors, isValid };
};
