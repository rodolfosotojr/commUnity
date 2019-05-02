//this will be the landing page

import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Home.css';
import logo from './logo1.png';


function Home() {
    return (
        <div className="homeComponent">
            <div className="overlay">
            <Container>
                <Row>
                    <Col size="md-12" align="center">
                    <img src={logo} />
                    </Col>
                    <Col size="md-12">
                    <h1>CommUnity</h1>
                    <h2>Welcoming You Home</h2>
                    <br></br>
                    <p>We're so happy to have you!<br></br>
                        Let's Get Started <br>
                    </br>Click on services to navigate to nearby service centers. Or, click on community connect to meet local families!</p>
                    </Col>
                </Row>

            </Container>
            </div>
        </div>

    )}

export default Home;