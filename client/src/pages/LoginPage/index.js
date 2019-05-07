//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './login.css';
import logo from './logo1.png';
import axios from "axios";

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        rememberMe: false,
    }

    componentDidMount() {
        axios.post("/auth/local/protected")
            .then(res => {
                console.log("AUTH RESPONSE: ", res.data.username)
                if (res.status === 200) {
                    window.location.assign("/Home")
                }

            })
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
    handleFormSubmit = event => {
        event.preventDefault();
        axios.post("/auth/local", {
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            window.location.assign("/Home")
        })
    }

    render() {
        return (
            <div className="login-bg">
                <Container>
                    <Row className="row justify-content-center py-5">
                        <Col size="md-6" align="center">
                            <img src={logo} />
                            <h1 className="text-light">Comm<span className="font-weight-bold">Unity</span></h1>
                        </Col>
                    </Row>
                    <Row className="row justify-content-center">
                        <Col size='sm-5'>
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
                                    <label className="form-check-label text-light">Remember Me</label>
                                    <button type="submit" className="btn btn-primary float-right" onClick={this.handleFormSubmit}>Login</button>
                                </div>
                            </form>
                            <div className="text-center pt-3 text-light">Not a Member? <a href="/Register">Register Now! <i class="fas fa-user-plus"></i></a></div>
                        </Col>
                    </Row>

                </Container>
            </div>

        )
    }
}

export default LoginPage;