import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div className="form-group">
      <FormattedMessage id="step2.username" defaultMessage="username (required)">
        {placeholder =>
          <Input
            className="form-control"
            id="username"
            name="username"
            type="text"
            placeholder={placeholder}
            value={props.username}
            onChange={props.handleInputChange}
          />
        }
      </FormattedMessage>

      <FormattedMessage id="step2.password" defaultMessage="Enter password">
        {placeholder =>
          <Input
            className="form-control"
            id="password"
            name="password"
            type="password"
            placeholder={placeholder}
            value={props.password}
            onChange={props.handleInputChange}
          />
        }
      </FormattedMessage>
    </div>
  );
}

export default Step2;