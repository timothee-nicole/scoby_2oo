import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { Component } from "react";
import AllItems from "./AllItems";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidGltb3RoZWVuaWNvbGUiLCJhIjoiY2tnNmVpcWQ3MDFiczMybW5hYm5odXZpbyJ9.Odhtcbzob0s3yNX5jMEKBw",
});

export default class Mapbox extends Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          <AllItems />
        </Layer>
      </Map>
    );
  }
}
