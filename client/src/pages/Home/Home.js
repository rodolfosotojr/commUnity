//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Home.css';
import logo from './logo1.png';


class Home extends Component () {
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
                                <br />
                                <p>We're so happy to have you! Let's Get Started.</p>
                                    <p>Click on services to navigate to nearby service centers.<br/>
                                    Or, click on connect to meet local families!</p>
                            </Col>
                        </Row>
                        <Row className="row justify-content-center">
                            <Col size='6'>
                                <form>
                                    <div className="form-group">
                                        <label>Enter Username</label>
                                        <input type="text" className="form-control" id="enter-username" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="input-password" placeholder="Password" />
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberme" />
                                        <label className="form-check-label">Remember Me</label>
                                        <button type="submit" className="btn btn-primary float-right">Login</button>
                                    </div>
                                </form>
                                <div className="text-center">Not a Member? <a href="/Register">Register Now! <i class="fas fa-user-plus"></i></a></div>
                            </Col>
                        </Row>
    
                    </Container>
                </div>
            </div>
    
        )
    }
}

export default Home;