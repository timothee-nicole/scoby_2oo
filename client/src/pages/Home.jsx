import React from "react";
import Map from "../components/Mapbox.jsx";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Home = (props) => {
  // Implement react map box here.
  return (
    <div>
      <h1>MAPBOX MAP HERE </h1>
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
 <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>;
</Map>;
    </div>
  );
};

export default Home;
