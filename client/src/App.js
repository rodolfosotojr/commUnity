import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register";
import Container from "./components/Container";
import UploadImage from "./pages/UploadImage";
// import Footer from "./components/Footer";




class App extends Component {
  // GLOBAL STATE
  state = {
    globalRoomId: null,
    globalUsername: '',
    globalVolunteerRoomId: null,
    globalVolunteer: ''
  }

  globalUpdateUsername = (username) => {
    this.setState({
      globalUsername: username
    })
  }
  globalRoomId = (room) => {
    this.setState({
      globalRoomId: room
    })
  }
  globalUpdateVolunteer = (volunteer) => {
    this.setState({
      globalVolunteer: volunteer
    })
  }

  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={LoginPage} />

            <Route exact path="/Home" render={
              (props) => <Home globalUsername={this.state.globalUsername} globalUpdateUsername={this.globalUpdateUsername} {...props} />
            } />
            <Route exact path="/SignUp" component={SignUp} />

            <Route exact path="/Connect" render={
              (props) => <Connect globalUsername={this.state.globalUsername} globalRoomId={this.globalRoomId} {...props} />
            } />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/Register" render={
              (props) => <Register globalUpdateUsername={this.globalUpdateUsername} {...props} />
            } />
            <Route exact path="/UploadImage" render={
              (props) => <UploadImage globalUsername={this.state.globalUsername} {...props} />
            } />
            <Route exact path="/Chat" render={(props) => <ChatPage globalUsername={this.state.globalUsername} {...props} />} />
          </Switch>
          <Navbar />
        </div>

      </Router>
    );
  }
}

export default App;
