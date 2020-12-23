import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "./styles.css";

class App extends React.Component {
  state = { lat: null, long: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        console.log(position.coords.latitude);
        this.setState({ long: position.coords.longitude });
      },

      (err) => this.setState({ errorMsg: err.message })
    );
  }

  render() {
    if (!this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMsg}</div>;
    } else {
      return <SeasonDisplay lat={this.state.lat} />;
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
