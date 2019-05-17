//this will be the landing page

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Home.css';
import logo from './logo1.png';
import axios from "axios";
import Carousel from "../../components/Carousel/carousel";
import Navbar from "../../components/Navbar";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Logout from "../../components/Logout";


class Home extends Component {
    state = {
        loggedIn: false,
        username: undefined,
        firstname: undefined,
        userType: ""
    }

    componentDidMount() {
        console.log("GLOBAL: ", this.props.globalUsername);
        axios.post("/auth/local/protected").then(res => {
            console.log("AUTH RESPONSE: ", res.data.username)
            if (res.status === 200) {
                this.setState({
                    loggedIn: true,
                    username: res.data.username,
                    firstname: res.data.firstname,
                    userType: res.data.userType
                });
                this.props.globalUpdateUsername(this.state.username);
            } 

        })
        .then(() => {
            if(this.state.userType==="volunteer"){
                window.location.assign("/Volunteer")
            }
        })
        .catch(err =>{
            console.log(err)
            this.setState({
                loggedIn:false
            })
            window.location.assign("/");
        })
   
    }

    render() {
        if(this.state.loggedIn)
        {
            return (
            <div className="homeComponent">
                <Container className="container">
                    <Row className="row justify-content-center">
                        <Col size="md-12" align="center">
                            <Carousel />
                        </Col>
                    </Row>
                    <Row className="row justify-content-center pt-2"> 
                        <Col size="md-6" align="center">
                            <img className="homeLogo" src={logo} />
                            <h1 className="homeHeader">Comm<span className="font-weight-bold">Unity</span></h1>
                            <h2>
                                <FormattedMessage id="homepage.home-welcome"
                                        defaultMessage="Welcome Home, { name }!"
                                        values = {{ name: this.state.firstname}} />
                            </h2>
                            <p>
                            <FormattedHTMLMessage id="homepage.happymsg"
                                    defaultMessage="Let's Get Started!<br />
                                    Click on services to navigate to nearby service centers.
                                    Or, click on connect to meet local families!" />
                            </p>
                        </Col>
                    </Row>
                    <Logout />
                    
                </Container>
                <Navbar />
            </div>
            )
        }
        else   
            return (
                <div></div>
            )
    }
}

export default Home;