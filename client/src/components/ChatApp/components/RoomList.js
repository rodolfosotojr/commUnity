import React from "react";

function RoomList(props) {
    const roomOrder = [...props.rooms].sort((a,b) => a.id - b.id) // sort() array method
    return (
        <div className="rooms-list">
            <ul>
                <h3>Your Rooms</h3>
                {roomOrder.map(room => {
                    const active = props.roomId === room.id ? " active" : "";
                    return (
                        <li key={room.id} className={"room" + active}>
                            <a onClick={() => props.subscribeToRoom(room.id)} href="#"># {room.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RoomList;