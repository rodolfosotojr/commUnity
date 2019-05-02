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
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>List Services Here!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="sm-3">
                           <div className="iconCard">
                           <i class="fas fa-gavel fa-4x"></i>
                           </div>

                           <div className="iconCard">
                           <i class="fas fa-heartbeat fa-4x"></i>
                           </div>

                           <div className="iconCard">
                           <i class="fas fa-graduation-cap fa-4x"></i>
                           </div>

                           <div className="iconCard">
                           <i class="fas fa-building fa-4x"></i>
                           </div>

                           <div className="iconCard">
                           <i class="fas fa-book-open fa-4x"></i>
                           </div>

                           <div className="iconCard">
                           <i class="fas fa-hands-helping fa-4x"></i> 
                           </div>

                               </Col>
                           </Row>


                       
                </Container>
            </div>
        </div>

    )
}

export default Services;