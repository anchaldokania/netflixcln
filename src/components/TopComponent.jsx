import React from "react";

import "../styles/topcomponent.css";

const TopComponent = () => {
  return (
    <>
      <div className="top-component-main">
        <div className="top-component-body">
          <h5 className="top-component-movie-name">Top Movie</h5>
          <button>Play</button>
        </div>
      </div>
    </>
  );
};

export default TopComponent;
