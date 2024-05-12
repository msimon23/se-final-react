import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal() {
  return (
    <ModalWithForm
      title="Register"
      buttonText={"Sign up"}
      secondaryButtonText1={"or"}
      secondaryButtonText2={"Sign in"}
    >
      <label className="modal__label">
        <span>Email</span>
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </label>

      <label className="modal__label">
        <span>Password</span>
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>

      <label className="modal__label">
        <span>Username</span>
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="20"
          placeholder="Enter your username"
          required
        />
      </label>
    </ModalWithForm>
  );
}
