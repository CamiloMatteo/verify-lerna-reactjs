import React from 'react'
import FormVerification from "./FormVerification"

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="columns is-desktop">
          <div className="column is-4 is-8-tablet">
            <h1 className="is-size-1 has-text-weight-medium">Verificar</h1>
            <p className="subtitle">Selecciona que deseas verificar</p>
            <FormVerification/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;