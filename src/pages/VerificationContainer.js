import React from "react";
import PageLoading from "../components/pageLoading"
import PageError from "../components/PageError";
import AuditModal from "./AuditModal"

class VerificationContainer extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      audit: "",
    },
    modalIsOpen: false,
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form)
    // this.setState({ loading: true, error: null });
    // try {
    //   // LLAMADA A LA API
    //   console.log(this.state.form)
    //   this.setState({ loading: false });
    //   // RETORNAR DATA
    // } catch (error) {
    //   this.setState({ loading: false, error: error })
    // };
    
    if (this.state.form.audit.length > 0) {
      this.setState({ modalIsOpen: true });
      console.log("GO!")
    } else {
      alert("EMPTY!");
    }
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  }
  
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <form className="buttons" onSubmit={this.handleSubmit}>
          <i className="fas fa-shield-check has-text-primary fa-lg"></i>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Número de auditoría" name="audit" onChange={this.handleChange} value={this.state.form.audit} />
            </div>
          </div>
          <button type="submit" className="button is-primary" onSubmit={this.handleSubmit}>Verificar</button>
        </form>
        { (this.state.modalIsOpen) && (<AuditModal isOpen={this.state.modalIsOpen} onOpenModal={this.handleOpenModal} onCloseModal={this.handleCloseModal} />) }
      </React.Fragment>

    )
  }
}

export default VerificationContainer