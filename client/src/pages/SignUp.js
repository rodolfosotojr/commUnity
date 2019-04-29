//this will be the sign up form page
import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, TextArea, FormBtn } from "../components/Form";


class SignUp extends Component {
    // Setting our component's initial state
    state = {
      firstName: [],
      lastName: "",
      Bio: ""
    };

    // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    render() {
        return (
          <Container fluid>
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
                  <TextArea
                    value={this.state.Bio}
                    onChange={this.handleInputChange}
                    name="Bio"
                    placeholder="Bio (Tell us a few things about yourself)"
                  />
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
  

export default SignUp;