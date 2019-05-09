import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <Input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="username (required)"
          value={props.username}
          onChange={props.handleInputChange}
          />
          <Input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleInputChange}
        />      
      </div>
    );
  }
  
  export default Step2;