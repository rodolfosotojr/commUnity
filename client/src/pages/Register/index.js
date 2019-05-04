//this will be the sign up form page
import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';

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
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("/auth/register",        {
        "firstname": this.state.firstName, 
        "email": this.state.email,
        "lastname": this.state.lastName,
        "state": this.state.state,
        "city": this.state.city,
        "username": this.state.username,
        "password": this.state.password,
        "userType": this.state.value 
    }).then(
        console.log()
    )
  }
    render() {
        return (
          <Container fluid="true">
            <Row>
              <Col size="md-6">
                  <h1>Sign Up to Connect with Families!</h1>
                <form>
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First-Name (required)"
                  />
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last-Name (required)"
                  />
                    <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email (required)"
                  />
                    <Input
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="City (required)"
                  />
                    <Input
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    name="state"
                    placeholder="State (required)"
                  />
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (required)"
                  />
                   <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password (required)"
                  />
                <label>
                    Sign up as a...
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="volunteer">Volunteer</option>
                        <option value="user">User</option>
                    </select>
                </label>
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Submit 
                  </FormBtn>
                </form>
              </Col>
              
            </Row>
          </Container>
        );
      }
   
}
  

export default Register;