import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    minHeight: "550px"
};

const pictureStyle = {
    maxWidth: "300px",
    maxHeight: "300px"
}

class ProfileCard extends Component {

    getRoomId = (event) => {
        // this.props.globalRoomId("test")
        this.props.globalRoomId(event.target.name);
        this.props.history.push('/Chat');
    }


    render() {
        return (
            <ProfileWrapper>
                <div className="card" style={cardStyle}>
                    <img src={this.props.profileImg} className="card-img-top" style={pictureStyle} alt="Profile Image" />
                    <div className="card-body">
                        <h1 className="card-title text-light">{this.props.firstName} {this.props.lastName}</h1>
                        <h3 className="card-title">{this.props.city}</h3>
                        <p className="card-text">{this.props.Bio}</p>
                    </div>
                    <div className="card-body-footer">
                        <a className="emailLink my-auto mt-2" href={`mailto:${this.props.email}`} className="card-link">Email</a>
                        <button className=" chatbtn ml-3 mt-1" onClick={this.getRoomId} name={this.props.roomId}>Chat</button>
                    </div>
                </div>
            </ProfileWrapper>
        );
    }
}

export default withRouter(ProfileCard);
// export default ProfileCard;
