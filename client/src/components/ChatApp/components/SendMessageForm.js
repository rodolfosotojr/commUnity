import React, { Component } from 'react'

class SendMessageForm extends Component {

    state = {
        msgInput: ""
    }

    msgChange = (event) => {
        console.log(event.target.value);
        this.setState({
            msgInput: event.target.value
        })

    };

    // inverse data flow by sending child to parent
    msgSubmit = (event) => {
        event.preventDefault();
        // Send message back to ChatApp index.js
        this.props.sendMessage(this.state.msgInput);
        this.setState({ msgInput: "" })

    }

    render() {
        return (
            <form onSubmit={this.msgSubmit} className="send-message-form" >
                <div className="input-group">
                    <input
                        className="form-control"
                        disabled={this.props.disabled}
                        onChange={this.msgChange}
                        value={this.state.msgInput}
                        placeholder="Enter message"
                        type="text"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" id="create-room-btn" type="submit">SEND</button>
                    </div>
                </div>
            </form>
        )

    }
}

export default SendMessageForm;