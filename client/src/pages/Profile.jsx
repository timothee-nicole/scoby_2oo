import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import "../styles/Profile.css";
import "../styles/CardItem.css";
import apiHandler from "../api/apiHandler";

class Profile extends Component {
  state = {
    phoneNumber: "",
  };

  componentDidMount = () => {
    
    apiHandler
      .getItems("/api/items")
      .then((apiRes) => {
        const newArr = apiRes.filter(
          (obj) => {
            // (obj.id_user = this.props.authContext.user._id)
          console.log(obj)
          console.log(this.props.authContext.user._id)
        }
        );
        console.log(newArr, "component did mount");
      })
      .catch((apiErr) => {
        {
          console.log(apiErr);
        }
      });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateOne("/profile", this.state)
      .then((apiRes) => {
        this.setState({
          phoneNumber: apiRes.phoneNumber,
        });
        this.props.authContext.setUser(apiRes);
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  };

  render() {
    const { authContext } = this.props;
    const { user } = authContext;
    console.log("this is the user:", user);

    return (
      <div style={{ padding: "100px", fontSize: "1.25rem" }}>
        {/* <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          This is profile, it's protected !
        </h2>
        <p>
          Checkout the<b>ProtectedRoute</b> component in
          <code>./components/ProtectRoute.jsx</code>
        </p> */}
        {/* <a
          style={{ color: "dodgerblue", fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://reacttraining.com/react-router/web/example/auth-workflow"
        >
          React router dom Demo of a protected route
        </a> */}

        <section className="Profile">
          <div className="user-image round-image">
            <img src={user.profileImg} alt={user.firstName} />
          </div>
          <div className="user-presentation">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <Link className="link" to="/profile/settings">
              Edit profile
            </Link>
          </div>
          {console.log("user", user)}
          {console.log(user.phoneNumber)}
          {user.phoneNumber ? (
            <div className="user-contact">
              <h4>{user.phoneNumber}</h4>
            </div>
          ) : (
            <div className="user-contact">
              <h4>Add a phone number</h4>

              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="label" htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <input
                    className="input"
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="Add phone number"
                    onChange={this.handleChange}
                  />
                </div>
                <button className="form__button">Add phone number</button>
              </form>
            </div>
          )}

          {/* Break whatever is below  */}
          <div className="CardItem">
            <div className="item-empty">
              <div className="round-image">
                <img src="/media/personal-page-empty-state.svg" alt="" />
              </div>
              <p>You don't have any items :(</p>
            </div>
          </div>

          <div className="CardItem">
            <h3>Your items</h3>
            <div className="item">
              <div className="round-image">
                <img
                  src="https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100"
                  alt="item"
                />
              </div>
              <div className="description">
                <h2>Name of item</h2>
                <h4>Quantity: 1 </h4>
                <p>Description of the item</p>
                <div className="buttons">
                  <span>
                    <button className="btn-secondary">Delete</button>
                  </span>
                  <span>
                    <button className="btn-primary">Edit</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withUser(Profile);
