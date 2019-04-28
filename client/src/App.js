import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/Chat" component={ChatPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
