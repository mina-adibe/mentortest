import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NumbersSpeak from "./components/NumbersSpeak";

export class App extends Component {
  state = {
    data: "",
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://run.mocky.io/v3/83b0bf2a-be40-4ffc-9d27-4aeaade24900`)
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
    const { id, title, title_colored, ...numbersdata } = this.state.data;
    let xdata = numbersdata.speaking_numbers;
    if (this.state.data) {
      return (
        <section>
          <div className="homeTiltle">
            <span className="homeTiltle__title1">{title}</span>
            <span style={{ color: "red" }} className="homeTiltle__title2">
              {" "}
              {}
              {title_colored}
            </span>
          </div>
          <div>
            <NumbersSpeak allData={xdata} />
          </div>
        </section>
      );
    } else {
      return "generic error";
    }
  }
}

export default App;
