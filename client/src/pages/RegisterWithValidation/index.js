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
      errors: {}
    }

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
    if (this.validateForm()) {
      this.props.globalUpdateUsername(this.state.username);
      axios.post("/auth/register", {
        "firstname": this.state.firstName,
        "email": this.state.email,
        "lastname": this.state.lastName,
        "state": this.state.state,
        "city": this.state.city,
        "username": this.state.username,
        "password": this.state.password,
        "userType": this.state.userType
      })
        .then(() => this.props.history.push("/UploadImage"))
    }
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
          Previous
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
          Next
        </button>
      )
    }
    return null;
  }


  // ================ Form Validation ==================
  // https://www.skptricks.com/2018/06/simple-form-validation-in-reactjs-example.html
  validateStep1() {

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const city = this.state.city;
    const state = this.state.state;

    const errors = {};
    let formIsValid = true;

    if (!firstName) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your First Name.";
    }

    if (!lastName) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your Last Name.";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter a valid email.";
    }

    if (typeof email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!city) {
      formIsValid = false;
      errors["city"] = "*Please enter a City.";
    }

    if (!state) {
      formIsValid = false;
      errors["state"] = "*Please enter a State.";
    }

    this.setState({
      errors: errors
    });
    return step1IsValid;


  }

  validateStep2() {

    const username = this.state.username;
    const password = this.state.password;

    const errors = {};
    let formIsValid = true;

    if (!username) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return step2IsValid;
  }

  // validateStep3() {

  //   const userType = this.state.userType;

  //   const errors = {};
  //   let formIsValid = true;

  //   if (!password) {
  //     formIsValid = false;
  //     errors["password"] = "*Please enter your password.";
  //   }

  //   this.setState({
  //     errors: errors
  //   });
  //   return formIsValid;
  // }

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
                    errors={this.state.errors}
                  />
                  <Step2
                    currentStep={this.state.currentStep}
                    handleInputChange={this.handleInputChange}
                    username={this.state.username}
                    password={this.state.password}
                    errors={this.state.errors}
                  />
                  <Step3
                    currentStep={this.state.currentStep}
                    handleInputChange={this.handleInputChange}
                    userType={this.state.userType}
                    handleDropdown={this.handleDropdown}
                    errors={this.state.errors}
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


