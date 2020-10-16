import React from "react";

class FormVerification extends React.Component {
  render() {
    return (
      <form className="options-container">
        <div className="column is-4">
          <div className="field">
            <label className="label">Seleccionar</label>
            <div className="control is-block">
              <div className="select is-fullwidth is-empty">
                <select>
                  <option>Seleccionar</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="field">
            <label className="label">RUT</label>
            <div className="control is-clearfix">
              <input className="input" type="text" placeholder="Ingrese su rut" />
            </div>
          </div>
        </div>
        <div className="column is-4">
          <a href="/" className="button is-primary modal-button" data-target="#myModal" aria-haspopup="true">
            Aceptar
          </a>
        </div>
      </form>
    )
  }
}

export default FormVerification;