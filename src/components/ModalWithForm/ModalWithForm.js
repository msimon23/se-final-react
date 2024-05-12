import React from "react";
import "./ModalWithForm.css";

export default function ModalWithForm({
  name,
  title,
  children,
  buttonText,
  secondaryButtonText1,
  secondaryButtonText2,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button className="modal__close-button" type="button" />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
          <button
            className="modal__submit-button-additional-center"
            type="button"
          >
            {secondaryButtonText1}
            <span className="button__text-blue">{secondaryButtonText2}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
