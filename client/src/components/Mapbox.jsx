import React  from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {

  state = {
    viewport: {
      width: 100,
      height: 100,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
    //   <ReactMapGL
    //     {...this.state.viewport}
    //     onViewportChange={(viewport) => this.setState({viewport})}
    //    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}/>
    // );
  }
}

export default Map