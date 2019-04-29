import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class MessageList extends Component {

    // componentWillUpdate = () => {
    //     const node = ReactDOM.findDOMNode(this);
    //     this.scrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    // }

    // auto scroll to user name
    // componentDidUpdate = () => {
    //     // if (this.scrollToBottom) {
    //     const node = ReactDOM.findDOMNode(this);
    //     node.scrollTop = node.scrollHeight
    //     // }
    // }

    render() {
        if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                    <i class="fas fa-door-open"></i> Join a room!
                    </div>
                    {this.props.messages.map((message, index) => {
                        return (
                            <Message key={index} username={message.senderId} text={message.text} />
                        )
                    })}
                </div>
            )
        }
    }
}

export default MessageList;