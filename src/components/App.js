import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Text from "./Text";

const API = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;

class App extends Component {
  state = {
    texts: [],
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => this.setState({ texts: data }));
  }

  handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Niepowodzenie");
      })
      .then((response) => response.json())
      .then((data) => {
        const text = data;
        this.setState((prevState) => ({
          texts: prevState.texts.concat(text),
        }));
      });
  };

  render() {
    const texts = this.state.texts;

    const randomText = texts[Math.floor(Math.random() * texts.length)];
    console.log(randomText);
    return (
      <div>
        <Button click={this.handleDataFetch} />
        {texts ? <Text texts={texts} /> : texts}
      </div>
    );
  }
}

export default App;
