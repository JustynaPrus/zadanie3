import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import PreviousButton from "./PreviousButton";
import Quote from "./Text";

const API = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;

class App extends Component {
  state = {
    texts: [],
    randomQuote: [],
    quotesList: [],
    isActive: false,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => this.setState({ texts: data }));
  }

  randomize = () => {
    const texts = this.state.texts;
    const quotesList = this.setState((prevState) => ({
      quotesList: prevState.randomQuote,
    }));
    const randomIndex = Math.floor(Math.random() * texts.length);
    this.setState({ randomQuote: texts[randomIndex] });
  };

  previousQuote = () => {
    this.setState({
      isActive: true,
    });
  };

  render() {
    const quotes = this.state.randomQuote;
    const quotesList = this.state.quotesList;

    console.log(quotes);
    console.log(quotesList);
    return (
      <div>
        <Button click={this.randomize} />
        {quotes ? <Quote quotes={quotes} /> : quotes}
        <PreviousButton click={this.previousQuote} />
        {this.state.isActive ? (
          <div>
            <p>Poprzedni cytat: </p>
            <p>{quotesList.quote}</p>
            <p>{quotesList.author}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
