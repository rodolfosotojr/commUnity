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
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Chat" component={ChatPage} />
            <Route exact path="/UploadImage" component={UploadImage} />
          </Switch>
          <Navbar />
        </div>
        
      </Router>
    );
  }
}

export default App;
