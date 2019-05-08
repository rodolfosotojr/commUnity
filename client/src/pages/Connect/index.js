//this will be the Community Connect page where all the volunteers will be displayed

import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Connect.css';
import SlideView from "../../components/SlideView"

function Connect() {
    return (
        <div className="connectComponent">
            <div className="overlay">

                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>Volunteer profiles go here!</h1>
                        </Col>
                    </Row>
                </Container>
                
                <Container>
                    <SlideView />
                </Container>

            </div>
        </div>
    )
}

export default Connect;