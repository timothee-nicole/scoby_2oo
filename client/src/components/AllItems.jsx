import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { Component } from "react";
import apiHandler from "../api/apiHandler.js";


import React, { Component } from 'react'

export default class AllItems extends Component {

    state = {
        markers: [],
      };
    
      componentDidMount() {
        apiHandler
          .getItems("/api/items")
          .then((apiRes) => this.setState({ markers: apiRes }))
          .catch((apiError) => {
            console.log(apiError);
          });
      }
    
      addToMap = () => {
        this.state.marker.map((object) => {
          new ReactMapboxGl.Marker(object).addTo(Map);
        });
      };


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
