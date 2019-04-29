//this will be the landing page

import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Home() {
    return (
        <div>

            <Container>
                <Row>
                    <Col size="md-12">
                    <img src= "./logo.png" />
                    <h1>Welcome to CommUnity!</h1>
                     
                    </Col>
                </Row>
            </Container>
            
        </div>

    )}

export default Home;