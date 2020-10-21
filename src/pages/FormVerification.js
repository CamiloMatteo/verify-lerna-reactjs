import React from "react";
// import TrxCentral from "../components/TrxCentral";

class FormVerification extends React.Component {
  state = {
    loading: false,
    error: null,
    options: ["Base de Datos", "Cédula Nueva", "Cédula Antigua", "Cédulas y Base de Datos"],
    form: {
      selectedOption: "Base de Datos",
      dni: "",
    },
  }

  handleSelectOption = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        selectedOption: e.target.value,
        dni: "",
      }
    })
  }

  handleChangeInput = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleForm = (e) => {
    e.preventDefault();
    const { selectedOption } = this.state.form;

    console.log(this.state.form);

    !this.state.options.includes(selectedOption) && console.log("Selected option dont include");
    //TrxCentral({data: this.state.form, options: this.state.options});
    alert("INCOMING!")
  };

  render() {
    const { selectedOption } = this.state.form;
    return (
      <form className="options-container" onSubmit={this.handleForm}>
        <div className="column is-4">
          <div className="field">
            <label className="label">Seleccionar</label>
            <div className="control is-block">
              <SelectList options={this.state.options} changeSelectOption={this.handleSelectOption} value={selectedOption} />
            </div>
          </div>
        </div>
        { selectedOption === "Base de Datos" && <InputDni changeInput={this.handleChangeInput} dni={this.state.form.dni} />}
        <div className={`column ${selectedOption === "Base de Datos" ? "is-4" : "is-8"}`}>
          <button onSubmit={this.handleForm} type="submit" className="button is-primary">
            Aceptar
          </button>
        </div>
      </form>
    )
  }
}

const SelectList = (props) => {
  return (
    <div className="select is-fullwidth is-empty">
      <select onChange={props.changeSelectOption} value={props.value}>
        {props.options.map(name => 
          <option key={name}>{name}</option>
        )}
      </select>
    </div>
  )
};

const InputDni = (props) => {
  return (
    <div className="column is-4">
      <div className="field">
        <label className="label">RUT</label>
        <div className="control is-clearfix">
          <input className="input" type="text" placeholder="Ingrese su rut" name="dni" onChange={props.changeInput} value={props.dni} required={true} />
        </div>
      </div>
    </div>
  )
}

export default FormVerification;