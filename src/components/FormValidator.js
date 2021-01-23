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
    setIsValid(checkFormValidity(target));
  };

  function checkFormValidity(target) {
    if (
      target.closest("form").checkValidity() &&
      document.querySelector("#lang").value
    ) {
      return true;
    } else {
      return false;
    }
  }

  function setErrorMessage(target, name) {
    if (target.validity !== undefined) {
      if (target.validity.valid) {
        setErrors({ ...errors, [name]: "" });
        return;
      }
      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: errorMessages.empty });
        return;
      }

      if (target.type === "email" && !validator.isEmail(target.value)) {
        setErrors({ ...errors, [name]: errorMessages.wrongEmail });
        return;
      }

      if (target.validity.patternMismatch) {
        if (target.name === "user") {
          setErrors({ ...errors, [name]: errorMessages.wrongName });
          return;
        }
        if (target.type === "tel") {
          setErrors({ ...errors, [name]: errorMessages.wrongTelFormat });
          return;
        }
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        return;
      }
    }
  }
  return { values, handleChange, errors, isValid };
};
