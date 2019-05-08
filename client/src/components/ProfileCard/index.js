import React from 'react'
import styled from "styled-components"
import "./style.css"

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default function ProfileCard(props) {
    return (
        <React.Fragment>
            <ProfileWrapper>
                <div className="card">
                    <h1>{props.firstName} {props.lastName}</h1>
                    <h3>{props.city}</h3>
                    <a>{props.email}</a>
                    <p>{props.shortBio}</p>
                    <img src={props.imageSrc}></img>
                </div>
            </ProfileWrapper>
        </React.Fragment>
    );
}