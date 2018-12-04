import React, { Component } from "react";
import PropTypes from "prop-types";

class Tabs extends Component {
  static propTypes = {};

  static defaultProps = {};
  state = {
    activeIndex: this.props.activeIndex
  };
  setActive = index => {
    this.setState({
      activeIndex: index
    });
  };
  render() {
    const { activeIndex } = this.state;
    const { titles } = this.props;
    return (
      <ul className="ex-4">
        {titles.map((tabTitle, index) => {
          return (
            <li className={index === activeIndex ? "is-active" : ""}>
              {/* cannot do this (this.setActive(index) 3shan onClick bta5od ref l functon) */}
              {/* we can do bind bardo(this.setActive.bind(this,index)) bind btraga3 function*/}
              <button onClick={() => this.setActive(index)}>{tabTitle}</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Tabs;
