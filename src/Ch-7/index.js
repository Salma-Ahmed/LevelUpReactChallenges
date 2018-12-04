import React, { Component } from "react";
import PropTypes from "prop-types";
import reactDOM from "react-dom";

const parent = document.createElement("div");
document.body.appendChild(parent);
class Modal extends Component {
  static propTypes = {};
  state = {
    visible: true
  };
  static defaultProps = {};
  closeModal = () => {};
  render() {
    const { visible } = this.state;
    return (
      <div className="ex-7">
        <div className="content">
          <button onClick={this.closeModal}>
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

export class ModalParent extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>
        <button>Open Modal</button>
        <Modal>
          <h3>Hello Modal!</h3>
          <p>This is a small modal.</p>
        </Modal>
      </div>
    );
  }
}

export default ModalParent;
