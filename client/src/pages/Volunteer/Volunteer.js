//this will be the page that lists all the services

import React from "react";
import { withRouter } from 'react-router-dom';
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import banner from './banner.jpg'
import './style.css';
import Axios from "axios"
import placeholder from "./servicePlaceholder.png"



class Volunteer extends React.Component {
  state = {
    resources: [],
    department: "",
    categories: [{ name: "Legal", display: true, icon: "fas fa-gavel fa-4x" }, { name: "Healthcare", display: true, icon: "fas fa-user-md fa-4x" }, { name: "Education", display: true, icon: "fas fa-graduation-cap fa-4x" }, { name: "Jobs", display: true, icon: "far fa-building fa-4x" }, { name: "Language", display: true, icon: "fas fa-book-reader fa-4x" }, { name: "Community", display: true, icon: "fas fa-users fa-4x" }],
    renderButton: false
  }


  handleInputChange = event => {
    const name = event.currentTarget.name;

    Axios.post('/api/resources', {
      resource_department: name
    })
      .then(response => {
        const newArray = this.state.categories.map(category => {
          if (category.name === name) {
            category.display = true
          } else {
            category.display = false
          }
          return category
        })
        this.setState({ resources: response.data, department: name, categories: newArray, renderButton: true })
        console.log(name)
        console.log(response.data);

      });



  };

  reset = event => {
    const displayArr = this.state.categories.map(category => {
      category.display = true
      return category
    })
    this.setState({ categories: displayArr, resources: [], renderButton: false })

  }

  routeChange = event => {
    let path = `/Chat`;
    this.props.history.push(path);
  }




  render() {
    return (
      <div className="volunteerComponent">
        <div className="overlay">
          <div className="container pt-3">
            <div className="row justify-content-center">
              <Col size="md-12 text-center">
                <h1>Welcome, Volunteer!</h1>
                <h4 className="text-center">While you wait to get connected, check out these amazing organizations <br></br>
                   helping refugee settlements across the city!</h4>
              </Col>

              {this.state.renderButton ?
                <button className="backBtn" onClick={this.reset}> Return </button>
                : ""}

            </div>
            <div className="row justify-content-center">
              {this.state.categories.map(category => {
                return (
                  category.display ?
                    <Col size="-6">
                      <button className="iconCard" onClick={this.handleInputChange} name={category.name}>
                        <i className={category.icon}></i>
                        <div>{category.name}</div>
                      </button>
                    </Col> : "")

               
              })}
              
              
              <Col size="md-12 text-center">
              <p className="chatRoomText">Go to Chat Room</p>
            <button className="BtnChat" onClick={this.routeChange}> Chat Room </button>
            </Col>
            
             
            
              <div className="row justify-content-center">
                {this.state.resources.map(resource => {
                  return (
                    <Col size="-6">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <p><img className="placeHolderImg img-fluid" src={placeholder} alt="card image" /></p>
                            <h1 className="cardTitle">{resource.org_name}</h1>
                            <p>{resource.org_website}</p>
                            <p>{resource.org_contact}</p>
                          </div>
                          <div className="flip-card-back">

                            <h4>Our Work</h4>
                            <br></br>
                            <p>{resource.org_description}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                })}




              </div>
            </div>
          </div>
        </div>
      </div>



    );
  };
}

export default withRouter (Volunteer);