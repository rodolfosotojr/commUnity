import React from "react"
import Container from "../Container"
import Col from "../Col"
import ProfileCard from "../ProfileCard"
import styled from "styled-components"
import Slider from "react-slick"

const Wrapper = styled.div`
    width:100%;
    padding:100px;
`;

const Page = styled.div`
    width:100%;
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

function SlideView(props) {

    return (
        <Wrapper>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
            >
                {data.map(dataItem => (
                    <Col size="md-12">
                        <ProfileCard
                            firstName={dataItem.first}
                            lastName={dataItem.last}
                            city={dataItem.city}
                        />
                    </Col>
                ))}
            </Slider>

        </Wrapper>
    );

}

export default SlideView;