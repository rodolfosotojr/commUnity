import React from "react";

function RoomList(props) {
    return (
        <div className="rooms-list">
                <ul>
                    <h3>Your Rooms</h3>
            {props.rooms.map( room => {
                return (

                    <li key={room.id} className="room">
                        <a href="#"># { room.name }</a>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default RoomList;