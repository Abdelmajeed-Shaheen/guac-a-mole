import React, { Component } from "react";
import Hole from "./Hole";

const firstGuac = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

firstGuac[Math.floor(Math.random() * Math.floor(9))] = true;
class Playground extends Component {
  state = {
    score: 0,
    timer: this.props.time,
    holelist: firstGuac
  };
  guacHit = () => {
    const score = this.state.score + 1;
    const holelist = this.state.holelist.map(hole => (hole ? !hole : hole));
    holelist[Math.floor(Math.random() * Math.floor(9))] = true;
    this.setState({ score, holelist });
  };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.timer === 0) {
        this.setState({ timer: this.props.time });
        this.props.endGame(this.state.score);
      } else {
        const holelist = this.state.holelist.map(hole => (hole ? !hole : hole));
        holelist[Math.floor(Math.random() * Math.floor(9))] = true;
        this.setState({ timer: this.state.timer - 1, holelist: holelist });
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    const holelist = this.state.holelist.map((hole, index) => (
      <Hole hole={hole} guacHit={this.guacHit} key={`${index}`} />
    ));
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div>
              <div className="text-center mb-3">
                <span className="neon green text-effect3 blink-3">
                  <h2>Guac-A-Mole</h2>
                </span>
              </div>
              <span className="neon blue text-effect3">
                <p style={{ fontSize: "12px" }}>
                  Time Left:{" "}
                  <span
                    className={
                      this.state.timer <= 10
                        ? "neon pink text-effect3 blink-3"
                        : "neon green text-effect3"
                    }
                    style={{ fontSize: "12px" }}
                  >
                    {this.state.timer} sec
                  </span>{" "}
                </p>
              </span>
              <span className="neon blue text-effect3">
                <p style={{ fontSize: "12px" }}>
                  Score:{" "}
                  <span
                    className="neon green text-effect3 "
                    style={{ fontSize: "12px" }}
                  >
                    {this.state.score} pts
                  </span>
                </p>
              </span>
              <div className="game-area">
                <div className="row ">{holelist}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Playground;
