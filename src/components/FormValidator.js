import React from "react";
import { errorMessages } from "../constants/constants";

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
    if (target.name === "lang") {
      if (target.closest("form").checkValidity() && target.value !== "Язык") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

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

    if (target.validity.typeMismatch && target.type === "email") {
      setErrors({ ...errors, [name]: errorMessages.printEmail });
    }

    if (target.validity.patternMismatch) {
      if (target.name === "user") {
        setErrors({ ...errors, [name]: errorMessages.wrongName });
      }
      if (target.type === "tel") {
        setErrors({ ...errors, [name]: errorMessages.wrongTelFormat });
      }
    } else {
      setErrors({ ...errors, [name]: errorMessages.validationMessage });
    }
  }
  console.log(isValid);
  return { values, handleChange, errors, isValid };
};
