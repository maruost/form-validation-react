import React from "react";
import Form from "./Form";
import { FormValidator } from "../components/FormValidator";

function RegistrationForm(props) {
  const { handleChange, errors, isValid } = FormValidator();
  const [isShown, setIsShown] = React.useState(false);

  function showList() {
    setIsShown(true);
  }

  function setInput(e) {
    document.querySelector("#lang").value = e.target.value;
    hideList();
  }

  function hideList() {
    setIsShown(false);
  }

  return (
    <Form
      name="registration"
      title="Регистрация"
      subtitle="Уже есть аккаунт?"
      signInBtn="Войти"
    >
      <div className="popup__input-box">
        <h4 className="popup__input-name">Имя</h4>{" "}
        <input
          type="text"
          name="user"
          className="popup__input"
          placeholder="Введите Ваше Имя"
          pattern="^([A-Za-zА-Яа-яЁё \-]+)$"
          required
          onChange={handleChange}
          onFocus={handleChange}
        />
      </div>
      <span className="popup__error">{errors.user}</span>
      <div className="popup__input-box">
        <h4 className="popup__input-name">Email</h4>
        <input
          type="email"
          name="email"
          className="popup__input"
          placeholder="Введите ваш email"
          required
          onChange={handleChange}
          onFocus={handleChange}
        />
      </div>
      <span className="popup__error">{errors.email}</span>
      <div className="popup__input-box">
        <h4 className="popup__input-name">Номер телефона</h4>
        <input
          type="tel"
          name="tel"
          className="popup__input"
          placeholder="Введите номер телефона"
          pattern="^\+?([()\-]*\d){11}[()\-]*$"
          required
          onChange={handleChange}
          onFocus={handleChange}
        />
      </div>
      <span className="popup__error">{errors.tel}</span>
      <div className="popup__input-box">
        <h4 className="popup__input-name">Язык</h4>
        <input
          className="popup__input"
          placeholder="Язык"
          list=""
          name="lang"
          id="lang"
          autoComplete="off"
          required
          onFocus={showList}
          onBlur={(e) => {
            setTimeout(hideList, 100);
            handleChange(e);
          }}
          readOnly
        />
        <datalist
          id="datalist"
          className={
            isShown
              ? "popup__datalist popup__datalist_opened"
              : "popup__datalist"
          }
        >
          <option
            className="popup__option"
            onClick={(event) => {
              setInput(event);
              handleChange(event);
            }}
          >
            Русский
          </option>
          <option
            className="popup__option"
            onClick={(event) => {
              setInput(event);
              handleChange(event);
            }}
          >
            Английский
          </option>
          <option
            className="popup__option"
            onClick={(event) => {
              setInput(event);
              handleChange(event);
            }}
          >
            Китайский
          </option>
          <option
            className="popup__option"
            onClick={(event) => {
              setInput(event);
              handleChange(event);
            }}
          >
            Испанский
          </option>
        </datalist>
      </div>
      <span className="popup__error">{errors.lang}</span>
      <div className="popup__checkbox">
        <input
          className="popup__input-checkbox"
          type="checkbox"
          id="conditions"
          name="conditions"
          onChange={handleChange}
          required
        />
        <label for="conditions" className="popup__checkbox-text">
          Принимаю{" "}
          <a className="popup__checkbox-link" href="#">
            условия
          </a>{" "}
          использования
        </label>
      </div>
      <button
        className={
          isValid
            ? "button button_size_big button_active"
            : "button button_size_big button_inactive "
        }
        disabled={isValid ? false : true}
      >
        Зарегистрироваться
      </button>
    </Form>
  );
}

export default RegistrationForm;
