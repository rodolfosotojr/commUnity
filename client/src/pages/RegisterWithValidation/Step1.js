import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <FormattedMessage id="step1.fname" defaultMessage="First-Name (required)">
        {placeholder => <Input
          className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          placeholder={placeholder}
          value={props.firstName}
          onChange={props.handleInputChange}
        />}
      </FormattedMessage>
      <div className="errorMsg">{props.errors.firstname}</div>

      <FormattedMessage id="step1.lname" defaultMessage="Last-Name (required)">
        {placeholder =>
          <Input
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            placeholder={placeholder}
            value={props.lastName}
            onChange={props.handleInputChange}
          />
        }
      </FormattedMessage>
      <div className="errorMsg">{props.errors.lastname}</div>


      <FormattedMessage id="step1.email" defaultMessage="Enter email">
        {placeholder =>
          <Input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder={placeholder}
            value={props.email}
            onChange={props.handleInputChange}
          />
        }
      </FormattedMessage>
      <div className="errorMsg">{props.errors.email}</div>


      <FormattedMessage id="step1.city" defaultMessage="City (required)">
        {placeholder =>
          <Input
            className="form-control"
            id="city"
            name="city"
            type="text"
            placeholder={placeholder}
            value={props.city}
            onChange={props.handleInputChange}
          />
        }
      </FormattedMessage>
      <div className="errorMsg">{props.errors.city}</div>

      <FormattedMessage id="step1.state" defaultMessage="State (required)">
        {placeholder =>
          <Input
            className="form-control"
            id="state"
            name="state"
            type="text"
            placeholder={placeholder}
            value={props.state}
            onChange={props.handleInputChange}
          />
        }
      </FormattedMessage>
      <div className="errorMsg">{props.errors.state}</div>
    </div>
  );
}

export default Step1;