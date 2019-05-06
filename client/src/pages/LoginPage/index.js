import React, {Component} from "react";
import {API_URL} from "../../config";
import { Input, FormBtn} from "../../components/Form";
import axios from 'axios'

class LoginPage extends Component {
    state = {
        username: "",
        password: "",
      };

    handleclick = () => {
        fetch("/auth/facebook").then(() => {
            console.log("fetched!")
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    handleFormSubmit = event =>
    {
        event.preventDefault();
        console.log(this.state)
        axios.post("/auth/local",{
            username: this.state.username,
            password: this.state.password
        }).then((res) =>{
            console.log("clicked...")
            console.log(res)
        })
    }
    render(){
        return (
        <div>
            <form>
                <h1>Login</h1>
                <button onClick={this.handleclick}>Facebook</button>
                <a href={`${API_URL}/auth/facebook`}>facebook</a>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (required)"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password (required)"
                />
                <FormBtn
                    onClick={this.handleFormSubmit}
                    >
                    Login 
                </FormBtn>
            </form>
        </div>
        )
    }
}

export default LoginPage;