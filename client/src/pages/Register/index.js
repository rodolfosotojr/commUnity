//this will be the sign up form page
import React, { Component } from "react";
import { withRouter } from 'react-router'
// import  { Redirect } from 'react-router-dom'
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
import './Register.css';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import logo from './logo1.png';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class Register extends Component {
  // Setting our component's initial state
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstName: "",
      email: "",
      lastName: "",
      state: "",
      city: "",
      username: "",
      password: "",
      userType: "",
      Bio:""
    }


  };

  // componentDidMount() {
  //   console.log("COMPONENT DID MOUNT");
  //   this.props.globalUpdateUsername("Orlando");
  // }

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
    console.log(this.state)
    this.props.globalUpdateUsername(this.state.username);
    axios.post("/auth/register", {
      "firstname": this.state.firstName,
      "email": this.state.email,
      "lastname": this.state.lastName,
      "state": this.state.state,
      "city": this.state.city,
      "username": this.state.username,
      "password": this.state.password,
      "userType": this.state.userType,
      "Bio": this.state.Bio
    })
      .then(() => this.props.history.push("/UploadImage"))
    // .then( 
    //   window.location.assign("/UploadImage")
    // )
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
    this.props.globalUpdateUsername(this.state.username);
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
            <i class="fas fa-arrow-circle-left"></i>
            <FormattedMessage id="register.prev" defaultMessage=" Previous" />
          
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
            <FormattedMessage id="register.next" defaultMessage="Next " />
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className="login-bg">
          <Container>
            <Row className="row justify-content-center py-5">
              <Col size="md-5">
                <img className="homeLogo" src={logo} />
                <h1 className="text-light mb-3">
                  <FormattedMessage id="register.heading" defaultMessage="Sign Up to Connect with Families!" />
                </h1>

                <form onSubmit={this.handleFormSubmit}>
                  <Step1
                    currentStep={this.state.currentStep}
                    handleInputChange={this.handleInputChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    city={this.state.city}
                    state={this.state.state}
                  />
                  <Step2
                    currentStep={this.state.currentStep}
                    handleInputChange={this.handleInputChange}
                    username={this.state.username}
                    password={this.state.password}
                  />
                  <Step3
                    currentStep={this.state.currentStep}
                    handleInputChange={this.handleInputChange}
                    userType={this.state.userType}
                    handleDropdown={this.handleDropdown}
                    Bio={this.state.Bio}
                  // onClick={this.handleFormSubmit}

                  />

                  {this.previousButton()}
                  {this.nextButton()}

                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }

}


export default Register;


