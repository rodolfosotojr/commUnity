import React from 'react'

export default function ProfileCard (props) {
    return(
        <React.Fragment>
<div className="card">
<h1>{props.firstName}</h1>
<h1>{props.lastName}</h1>
<h3>{props.city}</h3>
<img src={props.imageSrc}></img>
</div>
</React.Fragment>
    );
}