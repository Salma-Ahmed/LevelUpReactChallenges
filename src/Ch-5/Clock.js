import React, { Component } from "react";
import PropTypes from "prop-types";

class Clock extends Component {
  static propTypes = {};
  static defaultProps = {};
  state = {
    now: new Date()
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
  }
  addZero = value => {
    if (value < 10) return `0${value}`;
    return value;
  };
  render() {
    let merdiem = "";
    let { now } = this.state;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hours > 12) hours -= 12;
    hours < 12 ? (merdiem = "pm") : (merdiem = "am");
    return (
      <h1>
        {this.addZero(hours)}:{this.addZero(minutes)}:{this.addZero(seconds)}{" "}
        {merdiem}
      </h1>
    );
  }
}

export default Clock;
