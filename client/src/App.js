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

  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Connect" component={Connect} />
            <Route exact path="/Services" component={Services} />
            {/* <Route exact path="/Register" component={Register} /> */}
            <Route exact path="/Register"
              render={(props) => <Register globalUpdateUsername={this.globalUpdateUsername} {...props} />}
            />

            {/* <Route exact path="/UploadImage" component={UploadImage} /> */}
            <Route
              exact path="/UploadImage"
              render={(props) => <UploadImage globalUsername={this.state.globalUsername} {...props} />}
            />
            <Route exact path="/Chat" component={ChatPage} />
          </Switch>
          <Navbar />
        </div>

      </Router>
    );
  }
}

export default App;
