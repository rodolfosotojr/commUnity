import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Message from "./Message";
import "./MessageList.css";

class MessageList extends Component {

    render() {
        if (!this.props.roomId) {
            return (
                <div className="card-body msg_card_body">
                    <div className="join-room text-center">
                        <h3><i className="fas fa-door-open"></i> Join a room!</h3>
                    </div>
                </div>
            )
        }
        return (
            <div className="card-body msg_card_body message-list">

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