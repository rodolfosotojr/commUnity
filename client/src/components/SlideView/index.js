import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

const Wrapper = styled.div`
    width:100%;
    padding:100px;
`;

const Page = styled.div`
    width:100%;
`;

function SlideView (props) {

        return (
            <Wrapper>
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                >
                <Page>Page one</Page>
                <Page>Page two</Page>
                <Page>Page three</Page>
                <p>{props.profile}</p>
                </Slider>

            </Wrapper>
        );
    
}

export default SlideView;