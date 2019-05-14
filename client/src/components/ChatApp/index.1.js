import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'; // WAS @pusher/chatkit
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import "./styles.css";
// import { getJwt } from '../../utils/jwt';
// import axios from 'axios';
import API from "../../utils/API";

export class ChatApp extends Component {
  state = {
    roomId: null,
    messages: [],
    joinableRooms: [],
    joinedRooms: [],
    currentUser: '',
    // userId: undefined,
    user: '',
    username: undefined,
    email: '',
    volunteerRoomId: null,
  }

  componentDidMount() {
    // -------------AUTHENTICATION------------------------------------
    // Get Username from JWT Cookie
    API.getCookie()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            loggedIn: true,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            username: res.data.username,
            userType: res.data.userType
          });
        }
      })
      .then(() => {
        const userId = this.state.username
        this.mountChatKit(userId);
      })

    // -------------END AUTHENTICATION------------------------------------

  } // end componentDidMount()

  mountChatKit = (id) => {
    const instanceLocator = process.env.REACT_APP_INSTANCE_LOCATOR;
    const tokenUrl = process.env.REACT_APP_TOKEN_PROVIDER_URL;

    const chatManager = new ChatManager({
      instanceLocator,
      userId: id,
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    }) // end chatManager

    // handles all the connections
    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser; // hook itself
        this.setState({ currentUser: this.currentUser });
        alert(this.state.userType);
        if (this.state.userType === 'user') {
          // this.getRooms();
          // Connect User to Volunteer chatroom=======================================
          this.setState({roomId: this.props.globalRoomId})
          alert("User VIew");
          this.currentUser.subscribeToRoom({ 
            roomId: this.props.globalRoomId,
            hooks: {
              onMessage: message => {
                this.setState({
                  // Multipart version: parts[0].payload.content
                  messages: [...this.state.messages, message]
                })
              }
            }
          })
            .then(room => { this.setState({ roomId: this.state.globalRoomId }); this.getRooms(); })
            .catch(err => console.log('Error subscribing to room! ', err))
        }
        else {
          // Connect Volunteer to their chatroom=======================================
          this.setState({ messages: [] }) // clear chats

          // find room id by volunteer name
          API.getChatRooms()
            .then(response => {
              let room = response.data.find(item => item.name === this.state.username);
              this.setState({ volunteerRoomId: room.id.toString() })
            }).then(() => {
              // .subscribeToRoomMultipart() has .parts[] array instead of .text property
              this.currentUser.subscribeToRoom({ 
                roomId: this.state.volunteerRoomId,
                hooks: {
                  onMessage: message => {
                    this.setState({
                      // Multipart version: parts[0].payload.content
                      messages: [...this.state.messages, message]
                    })
                  }
                }
              })
                .then(room => { this.setState({ roomId: this.state.volunteerRoomId }); this.getRooms(); })
                .catch(err => console.log('Error subscribing to room! ', err))
            })
        }
      })
      .catch(err => console.log("ChatManager Connection Error: ", err));
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms,
        })
      })
      .catch(err => console.log('Error on joinableRooms: ', err))
  }

  subscribeToRoom = roomId => {
    this.setState({ messages: [] }) // clear chats in room before showing selected room
    this.currentUser.subscribeToRoom({
      // .subscribeToRoomMultipart() has .parts[] array instead of .text property
      roomId: roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
            // Multipart version: parts[0].payload.content
          })
        }
      }
    })
      .then(room => { this.setState({ roomId: room.id }); this.getRooms(); })
      .catch(err => console.log('Error subscribing to room! ', err))
  }

  // inverse data flow by sending function down to child
  sendMessage = text => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  // pass function to NewRoomForm
  createRoom = (name) => {
    const volunteer = this.state.username;
    const user = this.state.user;
    this.currentUser.createRoom({
      name: `${volunteer}-testuser`,
      private: true,
      addUserIds: [user]
    })
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => ("Error creating room: ", err))
  }


  render() {
    // USER VIEW=========================================================
    if (this.state.userType === 'user') {
      return (
        <div className="row justify-content-center">
          <div className="col-lg-6">

            {/* <div className="col-md-12 bg-primary rounded py-2">

              <RoomList
                subscribeToRoom={this.subscribeToRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                roomId={this.state.roomId}
              />
            </div> */}

            <div className="col-md-12 message-window">

              <MessageList
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                user={this.state.username}
                currentUser={this.state.currentUser}
                roomId={this.state.roomId}
                messages={this.state.messages} />

              <SendMessageForm
                disabled={!this.state.roomId}
                sendMessage={this.sendMessage} />

            </div>

          </div>
        </div >
      )
    } else {
    // VOLUNTEER VIEW=========================================================
      return (
        <div className="row justify-content-center">
          <div className="col-lg-6">

            {/* <div className="col-md-12 bg-primary rounded py-2">
              <NewRoomForm createRoom={this.createRoom} />

              <RoomList
                subscribeToRoom={this.subscribeToRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                roomId={this.state.roomId}
              />
            </div> */}

            <div className="col-md-12 message-window">

              <MessageList
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                user={this.state.username}
                currentUser={this.state.currentUser}
                roomId={this.state.roomId}
                messages={this.state.messages} />

              <SendMessageForm
                disabled={!this.state.roomId}
                sendMessage={this.sendMessage} />

            </div>

          </div>
        </div >
      )
    }

  }
}

export default ChatApp
