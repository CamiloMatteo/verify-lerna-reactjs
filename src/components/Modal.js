import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  console.log(props)
  if (props.isModalOpen) {
    console.log("ENTRA!")
    return ReactDOM.createPortal(
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="modal-card">
            <section className="modal-card-body has-text-centered">
              { props.children }
            </section>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;