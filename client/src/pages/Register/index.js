//this will be the sign up form page
import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
import './Register.css';
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
      userType: ""
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
      window.location.assign("/UploadImage")
    )
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
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

  render() {
    return (
      <React.Fragment>
         <div className="login-bg">
        <Container>
        <Row className="row justify-content-center py-5">
          <Col size="md-5">
          <img className="homeLogo" src={logo} /> 
      <h1 className="text-light mb-3"> Sign Up to Connect with Families!</h1>
    
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



  // render() {
  //   return (
  //     <div className="login-bg">
  //       <Container className="containerRegister">
  //         <Row className="row justify-content-center py-5">
  //           <Col size="sm-3">

  //             <h1 className="text-light mb-3"><img className="homeLogo" src={logo} /> Sign Up to Connect with Families!</h1>
  //             <form>
  //               <div className="form-group">
  //                 <Input
  //                   value={this.state.firstName}
  //                   onChange={this.handleInputChange}
  //                   name="firstName"
  //                   placeholder="First-Name (required)"
  //                   required
  //                 />
  //                 <Input
  //                   value={this.state.lastName}
  //                   onChange={this.handleInputChange}
  //                   name="lastName"
  //                   placeholder="Last-Name (required)"
  //                   required
  //                 />
  //                 <Input
  //                   value={this.state.email}
  //                   onChange={this.handleInputChange}
  //                   name="email"
  //                   placeholder="Email (required)"
  //                   required
  //                 />
  //                 <Input
  //                   value={this.state.city}
  //                   onChange={this.handleInputChange}
  //                   name="city"
  //                   placeholder="City (required)"
  //                   required
  //                 />
  //                 <Input
  //                   value={this.state.state}
  //                   onChange={this.handleInputChange}
  //                   name="state"
  //                   placeholder="State (required)"
  //                   required
  //                 />
  //                 <Input
  //                   value={this.state.username}
  //                   onChange={this.handleInputChange}
  //                   name="username"
  //                   placeholder="username (required)"
  //                   required
  //                 />
  //                 <Input
  //                   value={this.state.password}
  //                   onChange={this.handleInputChange}
  //                   name="password"
  //                   placeholder="password (required)"
  //                   required
  //                 />
  // <label className="text-light">
  //   Sign up as a...</label>
  // <select className="form-control form-control-lg" value={this.state.userType} onChange={this.handleDropdown} required>
  //   <option>Please Make A Selection</option>
  //   <option name="volunteer" value="volunteer">Volunteer</option>
  //   <option name="user" value="user">User</option>
  // </select>

  //                 <FormBtn
  //                   className="btn btn-primary"
  //                   onClick={this.handleFormSubmit}
  //                 >
  //                   Submit
  //                 </FormBtn>
  //               </div>
  //             </form>
  //           </Col>

  //         </Row>

  //       </Container>
  //     </div>
  //   );
  // }


  