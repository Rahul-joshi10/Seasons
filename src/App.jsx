import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

//--------------------Class component--------------------
class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //this is userdefined function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <div>
        <Loader message="Please accept the location request..." />
      </div>
    );
  }

  //React need to have render in class
  render() {
    //this is to make it easy to apply styles to all the components at once.
    return <div className="Some-class-name">{this.renderContent()}</div>;
  }
} //class end

export default App;
