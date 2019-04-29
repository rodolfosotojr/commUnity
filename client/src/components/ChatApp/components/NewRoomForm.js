import React, { Component } from "react";

class NewRoomForm extends Component {
    state = {
        roomName: ""
    }

    newRoomChange = event => {
        // get value from New Room Input tag
        this.setState({
            roomName: event.target.value
        })
    }

    newRoomSubmit = event => {
        event.preventDefault();
        // use passed method from parent
        this.props.createRoom(this.state.roomName);
        this.setState({roomName: ""})
    }

    render() {
        return (
            <div className="new-room-form">
                <form onSubmit={this.newRoomSubmit}>
                    <input
                        value={this.state.roomName}
                        onChange={this.newRoomChange}
                        type="text"
                        placeholder="Create Room"
                        required />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default NewRoomForm;