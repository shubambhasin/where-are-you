import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
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
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    } else if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return (
        <div className="loading">
          <Loader />
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
