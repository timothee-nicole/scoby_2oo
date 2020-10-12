import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
 
class Map = ReactMapboxGl({
  accessToken:
    process.env.REACT_APP_MAPBOX_TOKEN

  
});

export default Map;