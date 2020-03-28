import React, { Component } from "react";
import HomePage from "./homepage/HomePage";
import Playground from "./playground/Playground";
import Gameover from "./gameover/Gameover";

class App extends Component {
  state = {
    gamestart: false,
    gamefinished: false,
    score: 0,
    timer: 59
  };
  startGame = () => {
    this.setState({ gamestart: true });
  };
  endGame = score => {
    this.setState({ gamefinished: true, score });
  };
  restartGame = () => {
    this.setState({ gamestart: true, gamefinished: false, score: 0 });
  };
  render() {
    return (
      <>
        <div className="container">
          {!this.state.gamestart ? (
            <HomePage gamestart={this.startGame} />
          ) : !this.state.gamefinished ? (
            <Playground endGame={this.endGame} time={this.state.timer} />
          ) : (
            <Gameover score={this.state.score} restart={this.restartGame} />
          )}
        </div>
      </>
    );
  }
}

export default App;
