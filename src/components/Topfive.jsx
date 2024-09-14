import React from "react";

import "../styles/currentwatching.css";

const movieList = [
  {
    id: 1,
    name: "Movie 1",
    color: "#2525c5",
  },
  {
    id: 2,
    name: "Movie 2",
    color: "#2e0931",
  },
  {
    id: 3,
    name: "Movie 3",
    color: "#031b44",
  },
  {
    id: 4,
    name: "Movie 4",
    color: "#29170d",
  },
  {
    id: 5,
    name: "Movie 5",
    color: "#461b04",
  },
];

const TopFive = () => {
  return (
    <>
      <div className="current-main">
        <h3 className="current-heading">Top Five</h3>
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

export default TopFive;
