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
    messages: []
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

    chatManager.connect()
      .then(currentUser => {
        // console.log("Successful connection with ", currentUser)

        // WAS .subscribeToRoom()
        currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {
              console.log("Message text: ", message.parts[0].payload.content);
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          },
          // messageLimit: 20,

        })

      });

    // end componentDidMount()
  }

  render() {
    return (
      <div className="chat-app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    )
  }
}

export default ChatApp
