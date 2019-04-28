import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar />
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/Chat" component={ChatPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
