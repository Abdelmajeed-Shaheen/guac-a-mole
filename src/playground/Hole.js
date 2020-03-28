import React, { Component } from "react";
import avo from "./avo.png";
import mole from "./mole.png";

class Hole extends Component {
  state = {
    smash: false,
    image: avo
  };
  render() {
    return (
      <div className="col-md-4 mt-5">
        {this.props.hole ? (
          <div className="mole-hole">
            {this.state.smash ? (
              <img
                src={mole}
                width="100"
                height="130"
                className="d-inline-block align-center"
                alt=""
              />
            ) : (
              <img
                src={avo}
                width="100"
                height="100"
                className="d-inline-block align-center"
                alt=""
                onClick={this.props.guacHit}
              />
            )}
          </div>
        ) : (
          <div className="hole"></div>
        )}
      </div>
    );
  }
}
export default Hole;
