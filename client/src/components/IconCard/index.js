import React from "react";
import "./style.css"


function IconCard(props) {
    return (
        <div className="icon-card">
            <img alt= "" src={props.card} onClick={() => props.handleCardClick(props.id)} />
        </div>
    );
}

export default IconCard;