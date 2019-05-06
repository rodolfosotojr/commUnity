//this will be the Community Connect page where all the volunteers will be displayed

import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import './Connect.css';
import ProfileCard from '../../components/ProfileCard';
import styled from "styled-components";
import SlideView from "../../components/SlideView"


const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const data = [
    {
        first: 'Rodolfo',
        last: 'Soto',
        city: "Chicago"
    },
    {
        first: 'Sam',
        last: 'Samson',
        city: "Sacramento"
    },
    {
        first: 'John',
        last: 'Smith',
        city: "New York City"
    }


]

function Connect() {


    return (
        <div className="connectComponent">
        <div className="overlay">

            <Container>
                <Row>
                    <Col size="md-12">
                    <h1>Volunteer profiles go here!</h1>
                    </Col>
                    {data.map(data => (
                        <Col size="md-6">
                        <ProfileCard
                        firstName={data.first}
                        lastName={data.last}
                        city={data.city}
                     />
                    </Col>
                    ))}
               
                </Row>
            </Container>
            <Container>
            <SlideView
                profile="HELLO"
            />


            </Container>
                

            </div>
        </div>

    )}

export default Connect;