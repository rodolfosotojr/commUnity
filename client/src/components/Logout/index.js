import React, {Component} from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import { FormattedMessage} from 'react-intl';
import axios from "axios";

class Logout extends Component {
    handleLogout() {
        axios.get("/api/logout")
            .then((res) => {
                window.location.assign("/")
            })
    }
    render(){
        return (
        <Row className="row justify-content-center">
            <Col size='sm-4'>
                <div className="text-center text-light pt-3">
                <FormattedMessage id="homepage.notyou1"
                        defaultMessage="Not you?" />
                {" "}<a href="#" onClick={this.handleLogout}>
                <FormattedMessage id="homepage.notyou2"
                        defaultMessage="Logout Now!" />
                {" "}
                <i class="fas fa-sign-out-alt"></i>
                </a></div>
            </Col>
        </Row>
            
        )
    }
}

export default Logout