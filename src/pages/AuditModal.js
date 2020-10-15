import React from "react";
import Modal from "../components/Modal";

const AuditModal = (props) => (
  <Modal isModalOpen={props.isOpen} onOpen={props.onOpenModal} onClose={props.handleCloseModal}>
    <i className="fas fa-shield-check has-text-primary fa-4x mb-2"></i>
    <br></br>
    <div className="content">
      <h1 className="is-size-1 has-text-weight-medium">17.342.820-7</h1>
      <p>Lorem ipsum</p>
      <br></br>
    
      <button onClick={props.handleCloseModal} className="button is-primary">Entendido</button>
    </div>
  </Modal>
);

export default AuditModal;
