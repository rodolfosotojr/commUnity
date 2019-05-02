import React from "react";

function RoomList(props) {
    const roomOrder = [...props.rooms].sort((a,b) => a.id - b.id) // sort() array method
    return (
        <div className="rooms-list bg-primary text-light">
            {/* <ul> */}
                <h5>Your Rooms</h5>
                {roomOrder.map(room => {
                    const active = room.id === props.roomId ? " active" : "";
                    return (
                        <div key={room.id} className={"room" + active}>
                            <a className="text-light" onClick={() => props.subscribeToRoom(room.id)} href="#"><i className="fas fa-door-open"></i> {room.name}</a>
                        </div>
                    )
                })}
            {/* </ul> */}
        </div>
    )
}

export default RoomList;