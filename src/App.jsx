import React, { Component } from "react";
import "./App.css";
import Donation from "./components/Donation";
import Volunteers from "./components/Volunteers";
import Funds from "./components/Funds";

export class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <Donation></Donation>
        <Volunteers></Volunteers>
        <Funds></Funds>
      </div>
    );
  }
}

export default App;
