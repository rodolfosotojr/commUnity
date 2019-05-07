//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Home.css';
import logo from './logo1.png';
import axios from "axios";

class Home extends Component {
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

    // handleLogout = event => {
    //     axios.get("/auth/logout", (res) => {
    //         res.
    //         window.location.assign("/");
    //     })
    // }

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
                                <div className="text-center pt-3">Not you? <a href="/api/logout" onClick={this.handleLogout}>Logout Now! <i class="fas fa-user-minus"></i></a></div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>

        )
    }
}

export default Home;