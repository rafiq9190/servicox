import React from "react";
import "./style.css";

function Grid({ mean, median, mode, deviation }) {
  return (
    <div className="main">
      <div className="main-container">
        <div>
          <span>Mean</span> <br />
          <span>{mean}</span>
        </div>
      </div>
      <div className="main-container">
        <div>
          <span>Median</span> <br />
          <span>{median}</span>
        </div>
      </div>
      <div className="main-container">
        <div>
          <span>Mode</span> <br />
          <span>{mode}</span>
        </div>
      </div>
      <div className="main-container">
        <div>
          <span>Standard deviation</span> <br />
          <span>{deviation}</span>
        </div>
      </div>
    </div>
  );
}

export default Grid;
