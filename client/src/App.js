import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChatPage from "./pages/ChatPage";
// import HomePage from "./pages/HomePage";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register";
import Container from "./components/Container";
// import TestProtected from "./pages/TestProtected";
import Protected from "./pages/Protected";
import Protected2 from "./components/Protected2";





class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <Switch>
          
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Connect" component={Connect} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Chat" component={ChatPage} />
            <Route exact path="/" component={LoginPage} />
            
            {/* <Protected>
              <Route exact path={"/protected2"} component={Protected2} />
            </Protected> */}
            {/* <Route exact path= "/protected" component={TestProtected} /> */}
          </Switch>
          {/* {this.props.location.pathname === "/" ? null : <Navbar />} */}
          
          <Navbar />
        </div>
        
      </Router>
      
    );
  }
}

export default App;
