import React from "react";

const Gameover = props => {
  return (
    <>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 area">
          <div className="text-center">
            <span className="neon green text-effect3 blink-3">
              <h1>Congrates</h1>
            </span>
            <span className="neon pink mt-2">
              <h3 className="mt-3" style={{ fontSize: "18px" }}>
                you made{" "}
                <span className="neon blue text-effect3 blink-3">
                  <h3 className="mt-3" style={{ fontSize: "22px" }}>
                    {props.score}
                  </h3>
                </span>{" "}
                Guacamoles
              </h3>
            </span>
            <span className="neon green text-effect3 blink-3">
              <button className="btn btn-warning" onClick={props.restart}>
                Try Again
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gameover;
