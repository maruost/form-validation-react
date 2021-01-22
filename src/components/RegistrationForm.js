import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Form from "./Form";
import { FormValidator } from "../components/FormValidator";

function RegistrationForm(props) {
  const { values, handleChange, errors, isValid, resetForm } = FormValidator();

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
          className="popup__input popup__input_type_name"
          placeholder="Введите Ваше Имя"
          pattern="^([A-Za-zА-Яа-яЁё \-]+)$"
          required
          onChange={handleChange}
        />
      </div>
      <span className="popup__error">{errors.user}</span>
      <div className="popup__input-box">
        <h4 className="popup__input-name">Email</h4>
        <input
          type="email"
          name="email"
          className="popup__input popup__input_type_email"
          placeholder="Введите ваш email"
          required
          onChange={handleChange}
        />
      </div>
      <span className="popup__error">{errors.email}</span>
      <div className="popup__input-box">
        <h4 className="popup__input-name">Номер телефона</h4>
        <input
          type="tel"
          name="tel"
          className="popup__input popup__input_type_tel"
          placeholder="Введите номер телефона"
          pattern='^\+?([()\-]*\d){11}[()\-]*$'
          required
          onChange={handleChange}
        />
      </div>
      <span className="popup__error">{errors.tel}</span>
      <div className="popup__input-box">
        <h4 className="popup__input-name">Язык</h4>
        <select
          name="lang"
          className="popup__select popup__select_type_name"
          placeholder="Язык"
          required
          size="0"
          onChange={handleChange}
        >
          <option disabled selected hidden>
            Язык
          </option>
          <option className="popup__option" value="ru">
            Русский
          </option>
          <option value="en">Английский</option>
          <option value="zh">Китайский</option>
          <option value="es">Испанский</option>
        </select>
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
          Принимаю <a className="popup__checkbox-link">условия</a> использования
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
