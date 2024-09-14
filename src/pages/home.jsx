import React from "react";

import Header from "../components/Header";

import TopComponent from "../components/TopComponent";
import CurrentWatching from "../components/Currentwatching";
import TopFive from "../components/Topfive";
const Home = () => {
  return (
    <>
      <Header />
      <TopComponent />
      <CurrentWatching />
      <TopFive />
    </>
  );
};

export default Home;
