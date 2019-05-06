//this will be the landing page

import React, { Component } from "react";
import axios from "axios";



class TestProtected extends Component {
    state = {
        loggedIn: false
    }
    componentDidMount(){
        console.log("mounted")
        axios.post("/auth/local/protected").then(res =>{
            console.log(res)
            if(res.status === 200)
            {
                this.setState({loggedIn: true});
            }
            
        })
    }

    render (){
        if (this.state.loggedIn)
        {
             return(   
                <div >
                    <h1>This Is A Protected Route
                    </h1>
                </div>
             )
        }
        else
            return(
                <h1>Not protected</h1>
            )   
    }
}

export default TestProtected;