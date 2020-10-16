import React from "react";
import PageError from "../components/PageError";
import AuditModal from "./AuditModal"
import Loader from "../components/Loader"

class AuditVerification extends React.Component {
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
    this.setState({ loading: true, error: null });

    setTimeout(() => {
      if (this.state.form.audit.length > 0) {
        this.handleOpenModal();
        this.setState({ loading: false, error: null });
      } else {
        alert("EMPTY!");
        this.setState({ loading: false, error: null })
      }
    }, 1500);
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  }
  
  render() {
    if (this.state.loading) {
      return <div className="content has-text-centered"><Loader /></div>;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <form className="buttons is-centered" onSubmit={this.handleSubmit}>
          <i className="fas fa-shield-check has-text-primary fa-lg is-hidden-mobile"></i>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="text" placeholder="Número de auditoría" name="audit" onChange={this.handleChange} value={this.state.form.audit} required={true} />
            </div>
            <div className="control">
              <button type="submit" className="button is-primary" onSubmit={this.handleSubmit}>Verificar</button>
            </div>
          </div>
        </form>
        { (this.state.modalIsOpen) && (<AuditModal isOpen={this.state.modalIsOpen} onCloseModal={this.handleCloseModal} />) }
      </React.Fragment>
    )
  }
}

export default AuditVerification;