import React from "react"
import Container from "../Container"
import Col from "../Col"
import ProfileCard from "../ProfileCard"
import styled from "styled-components"
import Slider from "react-slick"

const Wrapper = styled.div`
    width:100%;
    padding:100px;
    margin: 0 auto;
`;

const data = [
    {
        first: 'Rodolfo',
        last: 'Soto',
        city: "Chicago",
        email: "rodolfo@gmail.com",
        bio: "My name is Rodolfo and I want to help"
    },
    {
        first: 'Sam',
        last: 'Samson',
        city: "Sacramento",
        email: "sam@gmail.com",
        bio: "My name is Sam and I want to help"
    },
    {
        first: 'John',
        last: 'Smith',
        city: "New York City",
        email: "jon@gmail.com",
        bio: "My name is jon and I want to help"
    }


]

function SlideView(props) {

    return (
        <Wrapper>
            <Slider
                speed={1000}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
                arrows={false}
            >
                {data.map(data => (
                    <Col size="md-12">
                        <ProfileCard
                            firstName={data.first}
                            lastName={data.last}
                            city={data.city}
                            email={data.email}
                            shortBio={data.bio}
                        />
                    </Col>
                ))}
            </Slider>
        </Wrapper>
    );
}

export default SlideView;