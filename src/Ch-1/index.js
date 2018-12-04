import React from "react";

class Notifications extends React.Component {
  // static propTypes = {};

  // static defaultProps = {};
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    count: this.props.count,
    title: this.props.title
  };
  // law elfunction di kant 3adya msh htshta8al 3shan this htb2a undefined w fel 7ala di remove elconstructor
  // handleClick = () => {
  //   this.setState(
  //     {
  //       count: 0
  //     },
  //     () => {
  //       console.log(this.state.count);
  //     }
  //   );
  // };
  handleClick() {
    this.setState(
      {
        count: this.state.count > 0 ? 0 : 6
      },
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <div className="ex-1" onClick={this.handleClick}>
        <i className="fa fa-bell" />
        {this.state.count > 0 && (
          <span>{this.state.count > 9 ? "9+" : this.state.count}</span>
        )}
        <p>{this.state.title}</p>
      </div>
    );
  }
}
// const Notifications = props => {
//   return (
//     <div className="ex-1" onClick={props.clearNotification}>
//       <i className="fa fa-bell" />
//       {props.count > 0 && <span>{props.count > 9 ? "9+" : props.count}</span>}
//     </div>
//   );
// };

export default Notifications;
