//this will be the page that lists all the services

import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import banner from './banner.jpg'
import './Services.css';

function Services() {
    return (
        <div className="servicesComponent">
            <div className="overlay">
                <div className="container pt-3">
                    <div className="row justify-content-center">
                        <Col size="md-6 text-center">
                            <h1>Resources</h1>
                        </Col>
                    </div>
                    <div className="row justify-content-center">
                        <Col size="-6">
                            <div className="iconCard">
                                <i class="fas fa-gavel fa-4x"></i> 
                                <div>Legal</div>
                            </div>
                        </Col>

                        <Col size="-6">
                            <div className="iconCard">
                                <i class="fas fa-heartbeat fa-4x"></i>
                                <div>Health</div>
                            </div>
                        </Col>

                        <Col size="-6">

                            <div className="iconCard">
                                <i class="fas fa-graduation-cap fa-4x"></i>
                                <div>Education</div>
                            </div>
                        </Col>

                        <Col size="-6">

                            <div className="iconCard">
                                <i class="fas fa-building fa-4x"></i>
                                <div>Legal</div>
                            </div>
                        </Col>

                        <Col size="-6">

                            <div className="iconCard">
                                <i class="fas fa-book-open fa-4x"></i>
                                <div>English Classes</div>
                            </div>
                        </Col>

                        <Col size="-6">

                            <div className="iconCard">
                                <i class="fas fa-hands-helping fa-4x"></i>
                                <div>Community</div>
                            </div>

                        </Col>
                    </div>



                </div>
            </div>
        </div>

    )
}

export default Services;