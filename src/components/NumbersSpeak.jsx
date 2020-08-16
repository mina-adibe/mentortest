import React, { Component } from "react";

export class NumbersSpeak extends Component {
  render() {
    let data = this.props.number;

    const items = data.map((item) => {
      return (
        <div key={item.id}>
          <div className="numbers">{item.number}</div>
          <div className="title">{item.title}</div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div>numbers speaker</div>
        <div className="container">{items}</div>
      </React.Fragment>
    );
  }
}

export default NumbersSpeak;
