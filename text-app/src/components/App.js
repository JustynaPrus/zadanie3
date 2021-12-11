import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Text from "./Text";

const API =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/?index=1";

class App extends Component {
  state = {
    texts: [],
  };

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
    console.log(API);
    const texts = this.state.texts;
    console.log(texts);
    return (
      <div>
        <Button click={this.handleDataFetch} />
        {texts ? <Text texts={texts} /> : texts}
      </div>
    );
  }
}

export default App;
