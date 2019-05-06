import React, { Component } from 'react';

class RoomList extends Component {
    state = {
        open: false,
        currentRoom: "Chat Rooms"
    }

    toggleCollapse = () => {
        this.setState({
            open: !this.state.open
        })
    }

    // roomOrder = [...this.props.rooms].sort((a, b) => a.id - b.id) // sort() array method

    render() {
        return (
            <div className="rooms-list bg-primary text-light">
                {/* show/hide button for rooms */}
                <button className="btn btn-secondary showrooms" onClick={this.toggleCollapse} data-toggle="collapse">{this.state.currentRoom}</button>
                
                <div id="rooms" className={'collapse' + (this.state.open ? ' show' : '')}>
                    {[...this.props.rooms].sort((a, b) => a.id - b.id).map(room => {
                        const active = room.id === this.props.roomId ? " active" : "";
                        return (
                            <div key={room.id} className={"room" + active}>
                                <a
                                    className="text-light"
                                    onClick={() => {
                                        this.props.subscribeToRoom(room.id);
                                        this.toggleCollapse();
                                        this.setState({ currentRoom: room.name})
                                    }}
                                    href="#">
                                    <i className="fas fa-door-open"></i> {room.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
                {/* {this.roomOrder.map(room => {
                    const active = room.id === this.props.roomId ? " active" : "";
                    return (
                        <div key={room.id} className={"room" + active}>
                            <a className="text-light" onClick={() => this.props.subscribeToRoom(room.id)} href="#"><i className="fas fa-door-open"></i> {room.name}</a>
                        </div>
                    )
                })} */}
            </div>
        )

    }
}

export default RoomList;