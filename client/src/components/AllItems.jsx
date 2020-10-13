import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import React, { Component } from "react";
import apiHandler from "../api/apiHandler.js";

import { Map } from "mapbox-gl";
class AllItems extends Component {

      state = {
        viewport: {
           width: "100vw",
           height: "100vh",
           latitude: 42.430472,
           longitude: -123.334102,
           zoom: 16
         },
        itemsLocation: [],
        // ItemsLatLong: [],
      };
     
      componentDidMount = () => {
        apiHandler
          .getItems("/api/items")
          .then((apiRes) => this.setState({ 
            itemsLocation: apiRes 
          }))
          .catch((apiError) => {
            console.log(apiError);
          });
      };

      
      // setItemsLocation = () => {
      //   let newArr = []
      //   this.state.itemsLocation.map((obj) => {
      //       newArr= [ {lat: obj.location.coordinates[0] , long: obj.location.coordinates[1], }]

      //   }) 
      //   this.setState({

      //     ItemsLongLat: newArr
      //   })
         
      // }
      
    
    
      // addToMap = () => {
      //   this.state.marker.map((object) => {
      //     return new ReactMapboxGl.Marker().addTo(Map);
      //   });
      // };

    render() {
      // this.setItemsLocation
      console.log(this.state.itemsLocation[0] && this.state.itemsLocation[3])
    
        return (
            <>
               {this.state.itemsLocation[0] && 
                  this.state.itemsLocation.map((obj) => (
                  <React.Fragment key={obj.name}>
                      <Marker
                      latitude={obj.location.coordinates[0]}
                      longitude={obj.location.coordinates[1]}
                      >{obj.name}</Marker>
                    </React.Fragment>
                  
                  ))
               }
            </>
        )
    }
  }

export default AllItems
