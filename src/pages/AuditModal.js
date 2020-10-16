import React from "react";
import Modal from "../components/Modal";
import "../assets/styles/Modal.scss"

const AuditModal = (props) => (
  <Modal isModalOpen={props.isOpen} isClose={props.onCloseModal}>
    <div className="content">
      <div className="has-text-centered"> 
        <hr></hr>
        <div className="has-icon-shield">
          <svg className="shield" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2962ff" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z"></path></svg>
        </div>
        <div className="has-icon-shield is-hidden">
          <svg className="fa-exclamation-triangle" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FF0000" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
        </div>
        <h1 className="is-size-2 has-text-weight-medium has-text-primary">ABCD-QAFR-LKQJ-T5H7</h1>
        <h2 className="has-text-grey is-size-6 has-text-weight-medium text-primary">Nombre y rut solicitante</h2>
        <div className="modal-info">
          <p className="is-size-5">MATTEO PÉREZ, CAMILO ANDRÉS<span> - </span><span className="has-text-grey">18586460-K</span></p>
        </div>
        <hr></hr>
        <div className="modal-actions is-flex level">
          <button className="button is-link is-outlined ">Imprimir</button>
          <button className="button is-link is-outlined level-right">Descargar</button>
        </div>
      </div>
    </div>
  </Modal>
);

export default AuditModal;
