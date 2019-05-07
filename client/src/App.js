import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
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
// import TestProtected from "./pages/TestProtected";
import Protected from "./pages/Protected";
import Protected2 from "./components/Protected2";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/Home" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Connect" component={Connect} />
            <Route path="/Services" component={Services} />
            <Route path="/Register" component={Register} />
            <Route path="/Chat" component={ChatPage} />
            {/* <Protected>
              <Route path={"/protected2"} component={Protected2} />
            </Protected> */}
            {/* <Route exact path= "/protected" component={TestProtected} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
