import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// const messages = defineMessages({
//   opt0: {
//       id: 'step3.option0',
//       defaultMessage: 'Please Make A Selection',
//   },
//   opt1: {
//       id: 'step3.option1',
//       defaultMessage: 'Volunteer',
//   },
//   opt2: {
//       id: 'step3.option2',
//       defaultMessage: 'User',
//   }
// });

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <div className="form-group">

      <label className="text-light">
        <FormattedMessage id="step3.signup-as" defaultMessage="Sign Up As:" />
      </label>
      <div className="errorMsg">{props.errors.usertype}</div>
      <select className="form-control" value={props.userType} onChange={props.handleDropdown} required>
        <FormattedMessage id="step3.option0" defaultMessage="Please Make A Selection" >
          {placeholder =>
            <option>
              {placeholder}
            </option>
          }
        </FormattedMessage>

        <FormattedMessage id="step3.option1" defaultMessage="Volunteer">
          {placeholder =>
            <option name="volunteer" value="volunteer">
              {placeholder}
            </option>
          }
        </FormattedMessage>


        <FormattedMessage id="step3.option2" defaultMessage="User">
          {placeholder =>
            <option name="user" value="user">
              {placeholder}
            </option>
          }
        </FormattedMessage>
      </select>

      <button className="btn btn-primary float-right mt-2">
        <FormattedMessage id="step3.submit" defaultMessage="Submit" />
      </button>

    </div>


  );
}

export default Step3;