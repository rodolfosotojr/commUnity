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
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        pauseOnHover: true,
                    }
                }
            ]
          };

    return (
        <Wrapper>
            <Slider {...settings}
            >
                {this.state.volunteers.map(data => (
                    <Col size="md-12">
                        <ProfileCard
                            firstName={data.firstname}
                            lastName={data.lastname}
                            city={data.city}
                            email={data.email}
                            profileImg={data.profileImg}
                            roomId={data.roomId}
                            Bio={data.Bio}
                            globalRoomId={this.props.globalRoomId}
                        />
                    </Col>
                ))}
            </Slider>
            </Wrapper>
            
    );
}
}

export default SlideView;