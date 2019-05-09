//this will be the sign up form page
import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
import './Register.css';
import logo from './logo1.png';

class Register extends Component {
  // Setting our component's initial state
  state = {
    firstName: "",
    email: "",
    lastName: "",
    state: "",
    city: "",
    username: "",
    password: "",
    userType: ""
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleDropdown = event => {
    this.setState({
      userType: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();


    axios.post("/auth/register", {
      "firstname": this.state.firstName,
      "email": this.state.email,
      "lastname": this.state.lastName,
      "state": this.state.state,
      "city": this.state.city,
      "username": this.state.username,
      "password": this.state.password,
      "userType": this.state.userType
    }).then(
      window.location.assign("/")
    )
  }

  render() {
    return (
      <div className="login-bg">
        <Container>
          <Row className="row justify-content-center py-5">
            <Col size="sm-3">
              
              <h1 className="text-light mb-3"><img className="homeLogo" src={logo} /> Sign Up to Connect with Families!</h1>
              <form>
                <div className="form-group">
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First-Name (required)"
                    required
                  />
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last-Name (required)"
                    required
                  />
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email (required)"
                    required
                  />
                  <Input
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="City (required)"
                    required
                  />
                  <Input
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    name="state"
                    placeholder="State (required)"
                    required
                  />
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (required)"
                    required
                  />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password (required)"
                    required
                  />
                  <label className="text-light">
                    Sign up as a...</label>
                  <select className="form-control form-control-lg" value={this.state.userType} onChange={this.handleDropdown} required>
                    <option>Please Make A Selection</option>
                    <option name="volunteer" value="volunteer">Volunteer</option>
                    <option name="user" value="user">User</option>
                  </select>

                  <FormBtn
                    className="btn btn-primary"
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </div>
              </form>
            </Col>

          </Row>

        </Container>
      </div>
    );
  }

}


export default Register;