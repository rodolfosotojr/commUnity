//this will be the landing page

import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';


class Protected extends Component {
    state = {
        loggedIn: false,
        username: undefined
    }

    componentDidMount() {
        axios.post("/auth/local/protected").then(res => {
            console.log("AUTH RESPONSE: ", res.data.username)
            if (res.status === 200) {
                this.setState({
                    loggedIn: true,
                    username: res.data.username,
                });
            } else {
                
            }

        })
    }

    render() {
        // if we are not authenticated show Loading...
        if (this.state.username === undefined) {
            return (
                <div><h1>Loading...</h1></div>
            )
        }

        // if user is not found return to home /
        if (this.state.username === null) {
            this.props.history.push('/');
        }

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Protected);