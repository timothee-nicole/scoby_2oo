import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { Component } from "react";
import apiHandler from "../api/apiHandler.js";

import { Map } from "mapbox-gl";
class AllItems extends Component {

    state = {
        markerLocation: [],
      };
    
      componentDidMount = () => {
        apiHandler
          .getItems("/api/items")
          .then((apiRes) => this.setState({ 
            markers: apiRes 
          }))
          .catch((apiError) => {
            console.log(apiError);
          });
      };
    
      addToMap = () => {
        this.state.marker.map((object) => {
          return new ReactMapboxGl.Marker().addTo(Map);
        });
      };

    render() {
      console.log(this.state.markerLocation)
        return (
            <div>
               
            </div>
        )
    }
}

export default AllItems
