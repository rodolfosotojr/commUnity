import React from 'react'
const axios = require("axios");

class UploadImage extends React.Component {


    render() {
        return (
            <form action="/uploadfile" enctype="multipart/form-data" method="POST">
                <input type="file" name="myFile" />
                <input type="submit" value="Upload a file" />
            </form>
        )
    }
}

export default UploadImage