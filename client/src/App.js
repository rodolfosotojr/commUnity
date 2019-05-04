import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
// import HomePage from "./pages/HomePage";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";
import Connect from "./pages/Connect/index";
import Services from "./pages/Services/index";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar />
        <Navbar />
        <Switch>
          <Route exact path="/Chat" component={ChatPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Connect" component={Connect} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
