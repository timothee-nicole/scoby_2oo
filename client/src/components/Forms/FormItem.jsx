import React, { Component } from "react";
import LocationAutoComplete from "../LocationAutoComplete";
import { withUser } from "../../components/Auth/withUser";
import "../../styles/form.css";
import apiHandler from "../../api/apiHandler.js"


class ItemForm extends Component {
  state = {
    name: "",
    category: "",
    quantity: 0,
    image:"",
    address:"",
    location: {
      type: "",
      coordinates: 0,
      formattedAddress: "",
    },
    description:"",
    contact: "",
    userPhone: "",
    userEmail: "",
  };

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let key = e.target.name
    let value = e.target.value
    console.log(this.state)
    this.setState({
        [key]: value
    });
  }
  componentDidMount() {
    apiHandler
      .getUserInfo("/api/users")
      .then((apiRes) => this.setState({
        userEmail: apiRes.email,
        userPhone: apiRes.phoneNumber
      }))
      .catch((apiErr) => console.log(apiErr))
    
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
  
    apiHandler.createOne("/api/items/", this.state)
    .then((apiRes) => {
      console.log(apiRes);
    })
    .catch((apiError) => {
      console.log(apiError);
    });

    // In order to send back the data to the client, since there is an input type file you have to send the
    // data as formdata.
    // The object that you'll be sending will maybe be a nested object, in order to handle nested objects in our form data
    // Check out the stackoverflow solution below : )

    // Nested object into formData by user Vladimir "Vladi vlad" Novopashin @stackoverflow : ) => https://stackoverflow.com/a/42483509
  };

  handlePlace = (position) => {
    this.setState({
      location: {
      type: position.geometry.type,
      coordinates: position.geometry.coordinates,
      formattedAddress: position.place_name
      },
    address: position.place_name,
    })
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    console.log(position.place_name);
  };

  render() {
    const { authContext } = this.props;
    const { user } = authContext;

    console.log('toto', user)
    return (
      <div className="ItemForm-container">
        <form className="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <h2 className="title">Add Item</h2>

          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input"
              type="text"
              placeholder="What are you giving away ?"
              name="name"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="category">
              Category
            </label>

            <select id="category" defaultValue="-1" name="category">
              <option value="-1" disabled>
                Select a category
              </option>
              <option value="Plant">Plant</option>
              <option value="Kombucha">Kombucha</option>
              <option value="Vinegar">Vinegar</option>
              <option value="Kefir">Kefir</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="quantity">
              Quantity
            </label>
            <input className="input" id="quantity" type="number" name="quantity" />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="location">
              Address
            </label>
            <LocationAutoComplete onSelect={this.handlePlace} />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="text-area"
              type="text"
              placeholder="Tell us something about this item"
              name="description"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="custom-upload label" htmlFor="image">
              Upload image
            </label>
            <input className="input" id="image" type="file" name="image"/>
          </div>

          <h2>Contact information</h2>

          <div className="form-group">
            <label className="label" htmlFor="contact">
              How do you want to be reached?
            </label>
            <div>
              <input type="radio" name="contact" value={this.state.userEmail}/> 
              user email
            </div>
            <input type="radio" name="contact" value={this.state.userPhone}/>
            contact phone number
          </div>

          <p className="message">
            <img src="/media/info.svg" alt="info" />
            Want to be contacted by phone? Add your phone number in your
            personal page.
          </p>

          <button className="btn-submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default withUser(ItemForm);
