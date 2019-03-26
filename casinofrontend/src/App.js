import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      saldot: "",
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get("http://localhost:8080/coinflip")
      .then(response =>
        this.setState({
          saldot: response.data.Saldot,
          message: response.data.Vinst
        })
      ); //console.log(response.data.Saldot)); //this.setState({ saldot: response.data.Saldot })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="button" onClick={this.handleClick}>
            SPELA!!!
          </button>
          <p>{this.state.message}</p>
          <p>Saldo: {this.state.saldot}kr</p>
        </header>
      </div>
    );
  }
}

export default App;
