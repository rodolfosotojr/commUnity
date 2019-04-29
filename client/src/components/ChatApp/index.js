import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'; // WAS @pusher/chatkit
import Chatkit from '@pusher/chatkit-server';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import "./styles.css";

export class ChatApp extends Component {
  state = {
    messages: [],
    joinableRooms: [],
    joinedRooms: [],

  }

  componentDidMount() {
    const instanceLocator = process.env.REACT_APP_INSTANCE_LOCATOR;
    const tokenUrl = process.env.REACT_APP_TOKEN_PROVIDER_URL;
    const chatManager = new ChatManager({
      instanceLocator,
      userId: 'orlando',
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    }) // end chatManager

    // handles all the connections
    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser; // hook itself

        this.currentUser.getJoinableRooms()
          .then(joinableRooms => {
            this.setState({
              joinableRooms,
              joinedRooms: this.currentUser.rooms,
            })
          }).catch(err => console.log('Error on joinableRooms: ', err))

        this.currentUser.subscribeToRoom({
          // .subscribeToRoomMultipart() has .parts[] array instead of .text property
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
                // Multipart version: parts[0].payload.content
              })
            }
          },
          // messageLimit: 20,

        })

      })
      .catch(err => console.log("ChatManager Connection Error: ", err));

  } // end componentDidMount()

  // inverse data flow by sending function down to child
  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.currentUser.rooms[0].id
    })
  }

  render() {
    return (
      <div className="chat-app">
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
        <NewRoomForm />
      </div>
    )
  }
}

export default ChatApp
