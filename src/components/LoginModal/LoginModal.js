import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({ isOpen, onClose, onOpenRegister }) {
  return (
    <ModalWithForm
      title="Login"
      buttonText={"Sign in"}
      secondaryButtonText1={"or"}
      secondaryButtonText2={"Sign up"}
      isOpen={isOpen}
      onClose={onClose}
      secondaryButtonAction={() => {
        onClose();
        onOpenRegister();
      }}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>
    </ModalWithForm>
  );
}
