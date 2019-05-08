import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Volunteer from "./components/Chat/Volunteer";
import User from "./components/Chat/User";
// import HomePage from "./pages/HomePage";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register";
import Container from "./components/Container";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
      
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/Home" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Connect" component={Connect} />
            <Route path="/Services" component={Services} />
            <Route path="/Register" component={Register} />
            <Route path="/Chat" component={ChatPage} />
            <Route path="/User" component={User} />
            <Route path="/Volunteer" component={Volunteer} />
            {/* <Route path="/User" component={User} /> */}
          </Switch>
          {/* <Footer /> */}
          <Navbar />
          <Navbar />
        </div>
        
      </Router>
    );
  }
}

export default App;
