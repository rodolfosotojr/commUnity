import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <Input
          className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First-Name (required)"
          value={props.firstName}
          onChange={props.handleInputChange}
          />
          
          <Input
          className="form-control"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last-Name (required)"
          value={props.lastName}
          onChange={props.handleInputChange}
          />
          <Input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleInputChange}
          />
          <Input
          className="form-control"
          id="city"
          name="city"
          type="text"
          placeholder="City (required)"
          value={props.city}
          onChange={props.handleInputChange}
          />
          <Input
          className="form-control"
          id="state"
          name="state"
          type="text"
          placeholder="State (required)"
          value={props.state}
          onChange={props.handleInputChange}
          />
      </div>
    );
  }
  
  export default Step1;