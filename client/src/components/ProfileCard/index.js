import React from 'react'
import styled from "styled-components"

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default function ProfileCard(props) {
    return (
        <React.Fragment>
            <ProfileWrapper>
                <div className="card">
                    <h1>{props.firstName}</h1>
                    <h1>{props.lastName}</h1>
                    <h3>{props.city}</h3>
                    <img src={props.imageSrc}></img>
                </div>
            </ProfileWrapper>
        </React.Fragment>
    );
}