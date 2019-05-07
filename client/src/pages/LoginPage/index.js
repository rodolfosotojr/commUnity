//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Home.css';
import logo from './logo1.png';
import axios from "axios";

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        rememberMe: false,
    }

    // Using [event.target.name] to handle onChange for multiple elements using a single function
    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCheck = event => {
        this.setState({
            rememberMe: event.target.checked
        })
    }
    handleFormSubmit = event =>
    {
        event.preventDefault();
        axios.post("/auth/local",{
            username: this.state.username,
            password: this.state.password
        }).then((res) =>{
            window.location.assign("/Home")
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
                                            name="username"
                                            onChange={this.handleInput}
                                            value={this.state.username}
                                            placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Password</label> */}
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.handleInput}
                                            value={this.state.password}
                                            placeholder="Password" />
                                    </div>

                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberme" />
                                        <label className="form-check-label">Remember Me</label>
                                        <button type="submit" className="btn btn-primary float-right" onClick={this.handleFormSubmit}>Login</button>
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

export default LoginPage;