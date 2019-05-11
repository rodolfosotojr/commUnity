import React from "react"
import Container from "../Container"
import Col from "../Col"
import ProfileCard from "../ProfileCard"
import styled from "styled-components"
import Slider from "react-slick"
import axios from "axios"


const Wrapper = styled.div`
    width:100%;
    margin:0 auto;

`;

class SlideView extends React.Component {

    state = {
        volunteers:[]
    }

    componentDidMount () {
        this.getData();
    }

    getData = () => {
        axios.get('/api/posts')
        .then(response => 
            {
                this.setState({volunteers: response.data})
                console.log(response, this.state)
            })
        .catch(error => console.log(error));
        
    }

    render() {

    return (
        <Wrapper>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
                arrows={false}
            >
                {this.state.volunteers.map(data => (
                    <Col size="md-12">
                        <ProfileCard
                            firstName={data.firstname}
                            lastName={data.lastname}
                            city={data.city}
                            email={data.email}
                        />
                    </Col>
                ))}
            </Slider>
            </Wrapper>
            
    );
}
}

export default SlideView;