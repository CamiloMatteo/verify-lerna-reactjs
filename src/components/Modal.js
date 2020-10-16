import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  if (props.isModalOpen) {
    return ReactDOM.createPortal(
      <div className="modal is-active">
        <div className="modal-background" onClick={props.isClose}/>
        <div className="modal-content">
          <div className="modal-card">
            <section className="modal-card-body has-text-centered">
              { props.children }
            </section>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={props.isClose}></button>
      </div>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;