import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Message from "./Message";
import "./MessageList.css";

class MessageList extends Component {

    render() {
        if (!this.props.roomId) {
            return (
                <div className="bg-light border rounded message-list px-2">
                    <div className="join-room text-center">
                        <h3><i className="fas fa-door-open"></i> Join a room!</h3>
                    </div>
                </div>
            )
        }
        return (
            <div className="bg-light w-100 border rounded message-list px-2">

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