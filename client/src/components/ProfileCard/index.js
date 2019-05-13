import React from 'react'
import styled from "styled-components"
import "./style.css"

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const cardStyle = {
    width: "18rem",
    backgroundColor: "#e1dfdf",
    fontFamily: "Karma, serif",
};

const pictureStyle = {
    maxWidth: "300px",
    maxHeight: "300px"
}

export default function ProfileCard(props) {
    return (
        <ProfileWrapper>
            <div className="card" style={cardStyle}>
                <img src="http://drforum.gemini.edu/wp-content/uploads/2019/04/jo03wn_avatar_1555607085.jpg" className="card-img-top" style={pictureStyle} alt="Profile Image" />
                <div className="card-body">
                    <h1 className="card-title">{props.firstName} {props.lastName}</h1>
                    <h3 className="card-title">{props.city}</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <a href={`mailto:${props.email}`} className="card-link">email</a>
                    <a href="..." className="card-link">chat</a>
                </div>
            </div>
        </ProfileWrapper>
    )
}