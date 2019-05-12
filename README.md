# [comm**Unity** Web App](http://community-chicago.herokuapp.com)
A community building app targeting refugee communities within Chicago and connecting them with local families to help facilitate a smoother transition. 

## Overview
Human interaction is vital to thriving communities. Our App helps refugee communities that have left their homes, to resettle in Chicago by rebuilding their communities and connecting them with local families. Personal interaction is key to their success in adopting Chicago as a home, and our APP helps make that happen.

![Wireframe](./wireframe.png)

## Target audience:
Refugee communities that have resettled in Chicago, as well as local families willing to volunteer their time and resources. 

## Technologies/Frameworks used:
Here are the technologies that you need to install 
* [ReactJS](https://reactjs.org/) A JavaScript library for building user interfaces
* [Bootstrap](https://getbootstrap.com/) An open source toolkit for developing with HTML, CSS, and JS. 
* [Node.js](https://nodejs.org/en/) A JavaScript runtime built on Chrome's V8 JavaScript engine.
* Node Modules:
    * [Express](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework for node.

## ChatKit logic
* Volunteers will be able to see a list of private rooms linked to users.
* Users may be limited to a single volunteer or show volunteers that they have chatted with already.

## Upload Image
1. I append the username to the formData using `formData.append('username', this.props.globalusername)`
2. Upload response:
username = req.body.username
updated filename = req.file.filename