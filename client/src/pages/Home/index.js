//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Home.css';
import logo from './logo1.png';


class Home extends Component {
    state = {
        username: '',
        password: '',
        rememberMe: false,
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleCheck = event => {
        this.setState({
            rememberMe: event.target.checked
        })
    }

    render() {
        return (
            <div className="homeComponent">
                <div className="overlay">
                    <Container>
                        <Row className="row justify-content-center pt-3">
                            <Col size="md-6" align="center">
                                <img src={logo} />
                                <h1>Comm<span className="font-weight-bold">Unity</span></h1>
                                <h2>Welcoming You Home</h2>
                                <p>We're so happy to have you!<br />
                                Let's Get Started!<br />
                                Click on services to navigate to nearby service centers. 
                                Or, click on connect to meet local families!</p>
                            </Col>
                        </Row>
                        <Row className="row justify-content-center">
                            <Col size='sm-4'>
                                <form>
                                    <div className="form-group">
                                        {/* <label>Enter Username</label> */}
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={this.handleUsername}
                                            placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Password</label> */}
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={this.handlePassword}
                                            placeholder="Password" />
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-check-inline">
                                            <input 
                                                type="checkbox" 
                                                className="form-check" 
                                                onChange={this.handleCheck} />
                                            <label className="form-check-label"><small>Remember Me</small></label>
                                        </div>
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary float-right">Login</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center pt-3">Not a Member? <a href="/Register">Register Now! <i class="fas fa-user-plus"></i></a></div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>

        )
    }
}

export default Home;