import React, { Component } from "react";
import "./App.css";
import Donation from "./components/Donation";
import Volunteers from "./components/Volunteers";
import Funds from "./components/Funds";
import axios from "axios";

export class App extends Component {
  state = {
    data: "",
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://run.mocky.io/v3/86c34ad2-5635-4d0f-b5d7-eab4e857ce7c`)
      .then((res) => {
        let data = res.data;
        this.setState({ data, isLoading: false });
      });
  }

  render() {
    let isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const { id, title, ...numbersdata } = this.state.data;
    let xdata = numbersdata.speaking_numbers;

    return (
      <React.Fragment>
        <div className="homeTiltle">{title}</div>
        <div className="parent">
          <Donation donationData={xdata} />
          <Volunteers volunteersDAta={xdata} />
          <Funds fundsDAta={xdata} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
