import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Quote from "./Text";

const API = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;

class App extends Component {
  state = {
    texts: [],
    randomQuote: [],
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => this.setState({ texts: data }));
  }

  randomize = () => {
    const texts = this.state.texts;
    const randomIndex = Math.floor(Math.random() * texts.length);
    this.setState({ randomQuote: texts[randomIndex] });
  };

  previousQuote = () => {};

  render() {
    const quotes = this.state.randomQuote;

    console.log(quotes);
    return (
      <div>
        <Button click={this.randomize} />
        {quotes ? <Quote quotes={quotes} /> : quotes}
      </div>
    );
  }
}

export default App;
