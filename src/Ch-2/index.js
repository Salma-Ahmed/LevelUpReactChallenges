import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  state = {
    loading: true,
    src: "http://placecorgi.com/240/240"
  };
  changeImage = () => {
    this.setState({
      loading: true,
      src: `http://placecorgi.com/240/240?randomId=${Math.random()}`
    });
  };
  handleImageLoaded = () => {
    this.setState({
      loading: false
    });
  };
  static propTypes = {
    //types of props
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  static defaultProps = {
    //we use this if props msh mab3ota f ba7ot default values
    title: "Default title",
    description: "Default description"
  };

  render() {
    const { title, description } = this.props;
    const { loading, src } = this.state;
    return (
      <div className="ex-2">
        <img
          src={src}
          alt={title}
          onLoad={this.handleImageLoaded}
          style={{
            display: loading ? "none" : ""
          }}
        />
        {loading && <div className="loader" />}
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={this.changeImage}>
          <i className="fa fa-sync" />
        </button>
      </div>
    );
  }
}

export default Card;
