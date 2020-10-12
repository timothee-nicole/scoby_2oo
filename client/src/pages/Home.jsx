import React from "react";
import Map from "../components/Mapbox.jsx";
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Home = (props) => {
  // Implement react map box here.
  return (
    <div>
      <h1>MAPBOX MAP HERE </h1>
      <Map mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} mapboxApiUrl={`?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
    </div>
  );
};

export default Home;
