import React from 'react'

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="columns is-desktop">
          <div className="column is-4 is-8-tablet">
            <h1 className="is-size-1 has-text-weight-medium">Verificar</h1>
            <p className="subtitle">Selecciona que deseas verificar</p>
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
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;