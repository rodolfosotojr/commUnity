import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <div className="form-group">
    
            <label className="text-light">
                    Sign Up As:</label>
                  <select className="form-control" value={props.userType} onChange={props.handleDropdown} required>
                    <option>Please Make A Selection</option>
                    <option name="volunteer" value="volunteer">Volunteer</option>
                    <option name="user" value="user">User</option>
                  </select>

                  <button className="btn btn-primary float-right mt-2">Submit</button>
   
      </div>
      
      
    );
  }
  
  export default Step3;