import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Message from "./Message";

class MessageList extends Component {

    render() {
        if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        <i className="fas fa-door-open"></i> Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">

                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList;