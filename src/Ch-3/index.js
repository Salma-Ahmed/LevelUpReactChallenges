import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    intialCount: PropTypes.number
  };
  static defaultProps = {
    min: -Infinity,
    max: Infinity,
    intialCount: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.intialCount
    };
  }
  capValue = value => {
    const { min, max } = this.props;
    // if (value <= min) return min;
    // if (value >= max) return max;
    return value;
  };
  decrease = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    // will use law fi 7agat mo3tmda 3ala ba3d
    this.setState(newState => {
      return { count: this.capValue(newState.count - 1) };
    });
  };
  increase = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.setState(newState => {
      return { count: this.capValue(newState.count + 1) };
    });
  };
  reset = () => {
    this.setState({
      count: this.state.count
    });
  };
  render() {
    // const { min, max } = this.props;
    const { count } = this.state;
    const { min, max } = this.props;
    return (
      <div className="ex-3">
        <p>{count}</p>
        <button onClick={this.decrease} disabled={count < min}>
          <i className="fa fa-minus" />
        </button>

        <button onClick={this.reset}>
          <i className="fa fa-undo" />
        </button>

        <button onClick={this.increase} disabled={count > max}>
          <i className="fa fa-plus" />
        </button>
      </div>
    );
  }
}

export default Counter;
