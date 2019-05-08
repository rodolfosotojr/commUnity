import React, { Component } from "react";
import axios from "axios";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'; // WAS @pusher/chatkit
import { sendMessage, handleInput, connectToRoom } from "../sharedMethods";

import "./Volunteer.css";

class Volunteer extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      currentRoom: null,
      newMessage: "",
      messages: [],
      rooms: []
    };

    this.sendMessage = sendMessage.bind(this);
    this.handleInput = handleInput.bind(this);
    this.connectToRoom = connectToRoom.bind(this);
  }

  componentDidMount() {
    const userId = "orlando";

    // Get Username from JWT Cookie
    axios.post("/auth/local/protected")
      .then(res => {
        console.log("AUTH RESPONSE: ", res.data.username)
        if (res.status === 200) {
          this.setState({
            loggedIn: true,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            username: res.data.username,
            userType: res.data.userType
          });
        }

        // Find user

      })
      .then(() => {
        const instanceLocator = process.env.REACT_APP_INSTANCE_LOCATOR;
        const tokenUrl = process.env.REACT_APP_TOKEN_PROVIDER_URL;

        const chatManager = new ChatManager({
          instanceLocator,
          userId: this.state.username,
          tokenProvider: new TokenProvider({
            url: tokenUrl
          })
        })

        return chatManager.connect({
            onAddedToRoom: room => {
              this.setState({
                rooms: [...this.state.rooms, room]
              });
            }
          })
          .then(currentUser => {
            this.setState(
              {
                currentUser,
                rooms: currentUser.rooms
              },
              () => {
                if (this.state.rooms.length >= 1) {
                  this.connectToRoom(this.state.rooms[0].id);
                }
              }
            );
          });
      })
      .catch(console.error);
  }

  joinRoom = id => {
    this.setState(
      {
        messages: []
      },
      () => this.connectToRoom(id)
    );
  };

  render() {
    const {
      newMessage,
      rooms,
      currentRoom,
      messages,
      currentUser
    } = this.state;

    const RoomList = rooms.map(room => {
      const isActive =
        currentRoom && currentRoom.id === room.id ? "active" : "";
      return (
        <li
          key={room.id}
          onClick={() => this.joinRoom(room.id)}
          className={`${isActive} room`}
        >
          {room.name}
        </li>
      );
    });

    const ChatSession = messages.map((message, index) => {
      const user = message.senderId === currentUser.id ? "support" : "user";
      return (
        <span key={index} className={`${user} message`}>
          {message.text}
        </span>
      );
    });

    return (
      <div className="support-area">
        <aside className="support-sidebar">
          <h3>Rooms</h3>
          <ul>{RoomList}</ul>
        </aside>
        <section className="support-session">
          <header className="current-chat">
            <h3>{currentRoom ? currentRoom.name : "Chat"}</h3>
          </header>
          <div className="chat-session">{ChatSession}</div>
          <form onSubmit={this.sendMessage} className="message-form">
            <input
              className="message-input"
              autoFocus
              placeholder="Compose your message and hit ENTER to send"
              onChange={this.handleInput}
              value={newMessage}
              name="newMessage"
            />
          </form>
        </section>
      </div>
    );
  }
}

export default Volunteer;
