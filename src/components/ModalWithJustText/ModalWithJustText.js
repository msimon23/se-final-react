import React from "react";
import "./ModalWithJustText.css";

export default function ModalWithJustText() {
  return (
    <div className="modal">
      <div className="modal_content">
        <button className="modal__close-button" type="button" />
        <h3 className="modal__title">Registration successfully completed!</h3>
        <form className="modal__form">
          <button
            className="modal__submit-button-additional-left"
            type="button"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
