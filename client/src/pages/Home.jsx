import React from "react";
import AllItems from "../components/AllItems.jsx";
import Mapbox from "../components/Mapbox.jsx";

const Home = (props) => {
  // Implement react map box here.
  return (
    <div>
      <h1>MAPBOX MAP HERE </h1>
      <Mapbox />
      <AllItems />
    </div>
  );
};

export default Home;
