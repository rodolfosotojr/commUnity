import React from "react";
import Avatar from 'react-avatar';

function Message(props) {

    if (props.currentUser.id === props.username) {
        console.log(props.currentUser);
        // return message float right
        return (
            <React.Fragment>
                <div className="d-flex justify-content-end mb-4">
                    <div className="msg_container_send px-3">
                        {props.text}
                        <span className="msg_time_send mt-2">{props.username}</span>
                    </div>
                    <div className="img_cont_msg">
                        {/* <Avatar name={props.username} size="40" /> */}
                        <img src={props.profileImg} className="rounded-circle user_img_msg" />
                    </div>
                </div>

            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    {/* <Avatar name={props.username} size="40" /> */}
                    <img src={props.profileImg} className="rounded-circle user_img_msg" />
                </div>
                <div className="msg_container px-3">
                    {props.text}
                    <span className="msg_time mt-2">{props.username}</span>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Message;