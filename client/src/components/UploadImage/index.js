
import React, { Component } from 'react';
const axios = require("axios");

class UploadImage extends Component {

    state = {
        file: null
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
    }

    render() {
        return (
            <div>
                <h1>Would you like to Upload a Profile Picture?</h1>
                <form>
                    <label>Select File</label>
                    <input type="file" name="userPhoto" onChange={this.handleFileChange} />

                    <button type="button" onClick={this.handleFileUpload}>Upload</button>

                </form>
            </div>
        )
    }
}

export default UploadImage