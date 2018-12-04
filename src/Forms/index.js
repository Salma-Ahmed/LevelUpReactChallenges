import React, { Component } from "react";
import PropTypes from "prop-types";
class ControlledForm extends Component {
  state = {
    errors: {},
    values: {
      name: "",
      email: "",
      motivation: "",
      role: ""
    }
  };
  handleChange = e => {
    if (isNaN(e.target.value)) {
      this.setState({
        values: {
          name: e.target.value
        }
      });
    }
    if (
      this.name.value === "" ||
      this.name.length < 2 ||
      this.name.legend > 24
    ) {
      this.setState({
        errors: {
          name: "Name is not valid"
        }
      });
    }
  };
  render() {
    const { errors, values } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Job Submission</legend>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={values.name}
                ref={el => (this.name = el)}
                onChange={this.handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <input type="email" name="email" />
            </div>
            <div>
              <select name="role">
                <option value="">Select a Role</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="qa">QA</option>
                <option value="data">Data scientist</option>
              </select>
            </div>
            <div>
              <textarea name="motivation" />
            </div>
            <input type="checkbox" name="avaialabe" />
          </fieldset>
          <button>Submit</button>
        </form>
        <div>
          <p>Thank you for submitting the form</p>
        </div>
      </>
    );
  }
}
class UncontrolledForm extends Component {
  static propTypes() {}
  static defaultProps() {}
  state = {
    errors: {},
    submitted: false
  };
  handleSubmit = e => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    const motivation = e.target.motivation.value;
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
    // let faultyField;
    if (!name) {
      errors.name = "Please enter a name";
      // faultyField = faultyField || e.target.name;
    } else {
      if ((name.length < 2 || name, e.length > 24)) {
        errors.name = "name should be between 2 and 24 chars";
        e.target.name.focus();
      }
    }
    if (!email) {
      errors.email = "Please enter an email";
      e.target.email.focus();
    } else {
      if (!regExp.test(email)) {
        errors.emal = "email should conatain @";
        e.target.email.focus();
      }
    }
    if (!role) {
      errors.role = "you must choose a role";
      e.target.role.focus();
    }
    if (!motivation) {
      errors.motivation = "motivation cannot be empty";
      e.target.motivation.focus();
    } else {
      if (motivation.length > 200) {
        errors.motivation = "motivation should not exceed 200 chars";
        e.target.motivation.focus();
      }
    }
    if (Object.keys(errors).length !== 0) {
      // faultyField.focus();
      console.log(errors);
      this.setState({
        errors
      });
    } else {
      console.log(errors);
      this.setState({
        submitted: true
      });
    }
    e.preventDefault();
  };

  render() {
    const { name, email, role, motivation } = this.state.errors;
    const { submitted } = this.state;
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={submitted ? { display: "none" } : { display: "block" }}
        >
          <fieldset>
            <legend>Job Submission</legend>
            <div>
              <input type="text" name="name" />
              {name && <p>{name}</p>}
            </div>
            <div>
              <input type="email" name="email" />
              {email && <p>{email}</p>}
            </div>
            <div>
              <select name="role">
                <option value="">Select a Role</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="qa">QA</option>
                <option value="data">Data scientist</option>
              </select>
              {role && <p>{role}</p>}
            </div>
            <div>
              <textarea name="motivation" />
              {motivation && <p>{motivation}</p>}
            </div>
            <input type="checkbox" name="avaialabe" />
          </fieldset>
          <button>Submit</button>
        </form>
        <div style={submitted ? { display: "block" } : { display: "none" }}>
          <p>Thank you for submitting the form</p>
        </div>
      </>
    );
  }
}

export default UncontrolledForm;
