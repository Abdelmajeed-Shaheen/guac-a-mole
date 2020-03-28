import React from "react";

const HomePage = props => {
  return (
    <>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 area">
          <div className="text-center">
            <span className="neon green text-effect3 blink-3">
              <h1>Guac-A-Mole</h1>
            </span>
            <span className="neon pink mt-2">
              <h3 className="mt-3" style={{ fontSize: "18px" }}>
                Make the fastest and most delicious guacamole
              </h3>
            </span>
            <span className="neon green text-effect3 blink-3">
              <button className="btn btn-success" onClick={props.gamestart}>
                Start The Game
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
