import React from "react";

import "../styles/currentwatching.css";

const movieList = [
  {
    id: 1,
    name: "Movie 1",
    color: "#2525c5",
  },
  {
    id: 1,
    name: "Movie 2",
    color: "#2e0931",
  },
  {
    id: 1,
    name: "Movie 3",
    color: "#031b44",
  },
  {
    id: 1,
    name: "Movie 4",
    color: "#29170d",
  },
];

const CurrentWatching = () => {
  return (
    <>
      <div className="current-main">
        <h3 className="current-heading">Current Watching</h3>
        <div
          style={{
            display: "flex",
            margin: "10px",
            width: "100%",
          }}
        >
          {movieList.map((item) => {
            return (
              <div
                className="movie-list"
                key={item.id}
                style={{ background: item.color }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CurrentWatching;
