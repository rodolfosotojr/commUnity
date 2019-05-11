
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import img from './imgDefault.jpg';
import './style.css';

const axios = require("axios");



class UploadImage extends Component {

    state = {
        file: null,
        redirect: false
    }

    handleFileChange = (event) => {
        console.log("event.target.files[0]:\n", event.target.files[0]);
        const file = event.target.files[0];
        this.setState({ file: file })

    }

    handleFileUpload = (event) => {
        console.log(this.state.file)
        const formData = new FormData();
        formData.append(
            'userPhoto',
            this.state.file,
            this.state.file.name
        )
        axios.post('/api/upload', formData)
        .then(window.location.assign("/"))
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div className="uploadImg-bg">
                <Container>
                    <Row className= "row justify-content-center py-5">
                        <Col size="sm-12" align="center">
                        <h1>Hi, {this.props.globalUsername} !!!</h1>
                        <img src={img} />
                            <h2 className="text-light"> Would you like to upload a profile picture?</h2>
                            <form>
                                <label className="text-light">Select File</label>
                                <input className="ml-2" type="file" name="userPhoto" onChange={this.handleFileChange} />
                                
                            </form>
                            <button className="uploadBtn btn btn-primary" type="button" onClick={this.handleFileUpload}>Upload</button> <br></br>

                            {this.renderRedirect()}
                            <button className="mt-5 mr-2 btn btn-secondary" onClick={this.setRedirect}>Nah, im ok!</button>
                        </Col>
                    </Row>
                </Container>
                </div>
        )
    }
}

export default UploadImage