import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v1";

class Todos extends Component {
  static propTypes = {
    myToDoList: PropTypes
  };

  static defaultProps = {
    // value: "Add a Task"
    // // myToDoList: []
  };

  state = {
    myToDoList: this.props.myToDoList,
    value: ""
  };
  handleSubmit = e => {
    console.log(this._inputElement.value);
    if (!(this._inputElement.value === "")) {
      this.setState(
        prevState => ({
          // return {
          //   myToDoList: prevState.myToDoList.concat({
          //     text: this._inputElement.value,
          //     complete: false
          //   })
          // };
          myToDoList: [
            ...prevState.myToDoList,
            { text: this._inputElement.value, complete: false }
          ]
        }),
        () => {
          this._inputElement.value = "";
        }
      );
    }
    e.preventDefault();
  };
  handleDelete = currentIndex => {
    this.setState(prevState => {
      return {
        myToDoList: prevState.myToDoList.filter(
          (item, index) => index !== currentIndex
        )
      };
    });
  };
  handleComplete = (currntIndex, complete) => {
    this.setState(prevState => {
      return {
        myToDoList: prevState.myToDoList.map((item, index) => {
          if (index === currntIndex) {
            return {
              text: item.text,
              complete: !complete
            };
          }
          return item;
        })
      };
    });
  };
  clearComplete = () => {
    this.setState(prevState => {
      return {
        myToDoList: prevState.myToDoList.filter(item => item.complete === false)
      };
    });
  };
  render() {
    let { myToDoList, value } = this.state;
    return (
      <div className="ex-6">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newItem"
            placeholder="Type here..."
            value={value}
            ref={el => {
              this._inputElement = el;
            }}
            onChange={e => {
              if (isNaN(e.target.value)) {
                this.setState({
                  value: e.target.value
                });
              }
            }}
          />
        </form>

        <ol>
          {myToDoList.length === 0 && <li>Add Items </li>}
          {myToDoList.map((todo, index) => {
            return (
              <li key={uuid()}>
                <button
                  onClick={this.handleComplete.bind(this, index, todo.complete)}
                >
                  {todo.complete ? <s>{todo.text}</s> : todo.text}
                </button>
                <span onClick={this.handleDelete.bind(this, index)}>
                  <i className="fa fa-trash" />
                </span>
              </li>
            );
          })}
        </ol>
        <button onClick={this.clearComplete}>Clear Complete</button>
      </div>
    );
  }
}

export default Todos;
