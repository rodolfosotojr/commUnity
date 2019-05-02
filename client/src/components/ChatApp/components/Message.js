import React from "react";

function Message(props) {
    return (
        <div className="message mb-1">
            <small className="text-muted message-username px-2">{props.username}:</small>
            <span className="message-text bg-primary text-light rounded p-1">{props.text}</span>
        </div>
    )
}

export default Message;