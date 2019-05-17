//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './login.css';
import logo from './logo1.png';
import axios from "axios";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        rememberMe: false,
        fields: {},
        errors: {}
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
        if (this.validateForm() ) {
            axios.post("/auth/local", {
                username: this.state.username,
                password: this.state.password
            }).then((res) => {
                window.location.assign("/Home")
            })

        }

    }

    // =============== FORM VALIDATION ==================
    // TUTORIAL: https://www.skptricks.com/2018/06/simple-form-validation-in-reactjs-example.html
    validateForm() {

        let username = this.state.username;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;

        if (!username) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (!password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    render() {
        return (
            <div className="login-bg">
                <Container>
                    <Row className="row justify-content-center py-5">
                        <Col size="md-6" align="center">
                            <img src={logo} />
                            <h1 className="text-light">Comm<span className="font-weight-bold">Unity</span></h1>
                            <h2>
                                <FormattedMessage id="loginpage.welcome"
                                    defaultMessage="Welcoming You Home"
                                    description="Welcome header on Login page" />
                            </h2>
                        </Col>
                    </Row>
                    <Row className="row justify-content-center">
                        <Col size='sm-5'>
                            <form>

                                <div className="form-group">
                                    {/* <label>Enter Username</label> */}
                                    <FormattedMessage id="loginpage.username">
                                        {placeholder => <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            onChange={this.handleInput}
                                            value={this.state.username}
                                            placeholder={placeholder}
                                            required />}
                                    </FormattedMessage>
                                    <div className="errorMsg">{this.state.errors.username}</div>

                                </div>
                                <div className="form-group">
                                    {/* <label>Password</label> */}

                                    <FormattedMessage id="loginpage.password">
                                        {placeholder => <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.handleInput}
                                            value={this.state.password}
                                            placeholder={placeholder}
                                            required />}
                                    </FormattedMessage>
                                    <div className="errorMsg">{this.state.errors.password}</div>

                                </div>

                                <div className="form-group form-check">
                                    {/* <input type="checkbox" className="form-check-input" id="rememberme" />
                                    <label className="form-check-label text-light">
                                        <FormattedMessage id="loginpage.remember"
                                            defaultMessage="Remember Me"
                                            description="Remember Me" />
                                    </label> */}
                                    <button type="submit" className="btn btn-primary float-right" onClick={this.handleFormSubmit}>
                                        <FormattedMessage id="loginpage.loginBtn"
                                            defaultMessage="Login"
                                            description="Login" />
                                    </button>
                                </div>
                            </form>
                            <div className="text-center pt-3 text-light">
                                <FormattedMessage id="loginpage.notamember"
                                    defaultMessage="Not a Member?"
                                    description="Not a Member?" />
                                {" "}
                                <a href="/Register">
                                    <FormattedMessage id="loginpage.registernow"
                                        defaultMessage="Register Now!"
                                        description="Register Now!" />
                                    <i className="fas fa-user-plus"></i></a></div>
                        </Col>
                    </Row>

                </Container>
            </div>

        )
    }
}

export default LoginPage;