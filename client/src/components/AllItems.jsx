import ReactMapboxGl, { Marker, Layer, Image } from "react-mapbox-gl";
import React, { Component } from "react";
import apiHandler from "../api/apiHandler.js";

import { Map } from "mapbox-gl";
class AllItems extends Component {

      state = {
 
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
      console.log(this.state.itemsLocation[0] && this.state.itemsLocation)
    
        return (
            <>
               {this.state.itemsLocation[0] && 
                  this.state.itemsLocation.map((obj) => (
                    console.log(obj),
                  <React.Fragment key={obj.name}>
                  <Layer type="symbol" layout={{ "icon-image": "marker-15" }}>
                      <Marker
                      coordinates={obj.location.coordinates}
                      anchor="bottom">
                     <img src='https://i.ytimg.com/vi/Q6amwKTI9VY/maxresdefault.jpg' />
                      </Marker>
                  </Layer>
                    </React.Fragment>
                  
                  ))
               }
            </>
        )
    }
  }

export default AllItems
