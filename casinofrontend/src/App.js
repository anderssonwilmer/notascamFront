import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      saldot: "",
      message: "",
      isHidden: true,
      disabledButton: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //document.getElementsByClassName("App-logo")[0].style.animation =
    //  "App-logo-spin infinite 1s linear";
    this.refs.Applogo.style.animation = "App-logo-spin infinite 1s linear";
    this.setState({ isHidden: true, disabledButton: true });
    axios.get("http://localhost:8080/coinflip").then(response => {
      setTimeout(
        function() {
          this.setState({
            saldot: response.data.Saldot,
            message: response.data.Vinst,
            isHidden: false,
            disabledButton: false
          });
          this.refs.Applogo.style.animation =
            "App-logo-spin infinite 10s linear";
        }.bind(this),
        1000
      );
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" ref="Applogo" />
          <button
            disabled={this.state.disabledButton}
            className="button"
            onClick={this.handleClick}
          >
            Spela
          </button>
          <div className="Message">
            {!this.state.isHidden && <p>{this.state.message}</p>}
            {!this.state.isHidden && <span>Saldo: {this.state.saldot}kr</span>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
