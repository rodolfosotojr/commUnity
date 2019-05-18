//this will be the page that lists all the services

import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import banner from './banner.jpg'
import './Services.css';
import Axios from "axios"
import placeholder from "./servicePlaceholder.png"
import MapBox from "../../components/MapBox";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';



class Services extends React.Component {
    state = {
        resources: [],
        department: "",
        categories: [{ name: "Legal", display: true, icon: "fas fa-gavel fa-2x" }, { name: "Healthcare", display: true, icon: "fas fa-user-md fa-2x" }, { name: "Education", display: true, icon: "fas fa-graduation-cap fa-2x" }, { name: "Jobs", display: true, icon: "far fa-building fa-2x" }, { name: "Language", display: true, icon: "fas fa-book-reader fa-2x" }, { name: "Community", display: true, icon: "fas fa-users fa-2x" }],
        renderButton: false,
        displayMap: false,
        currentCategory: ""
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
                this.setState({ resources: response.data, department: name, categories: newArray, renderButton: true, displayMap: true, currentCategory: name })
                console.log(name)
                console.log(response.data);

            });



    };

    reset = event => {
        const displayArr = this.state.categories.map(category => {
            category.display = true
            return category
        })
        this.setState({ categories: displayArr, resources: [], renderButton: false, displayMap: false })

    }





    render() {
        return (
            <div className="servicesComponent">

                <div className="container pt-3">
                    <div className="row justify-content-center">
                        <Col size="md-12 text-center">
                            <h1 className="resourcesTitle">
                                <FormattedMessage id="services.resources" defaultMessage="Resources" />

                            </h1>
                        </Col>

                        <Col size="md-12 text-center">
                            {this.state.renderButton ?
                                <button className="backBtn glow-button" onClick={this.reset}>
                                    <FormattedMessage id="services.return" defaultMessage="Return" />
                                    
                                </button>
                                : ""}
                        </Col>


                        {this.state.displayMap ?
                            <div className="map">

                                <Col size="md-12">
                                    <MapBox tableName={this.state.currentCategory} height={"320px"} width={"100vw"} padding={"15px"} />
                                </Col>
                            </div>


                            : ""}

                    </div>
                    <div className="icons row mt-2">
                        {this.state.categories.map(category => {
                            return (
                                category.display ?
                                    <Col size="md-12">
                                        <button className=" btnIcon glow-button btn-lg btn-block" onClick={this.handleInputChange} name={category.name}>

                                            <div className="iconDiv">
                                                <div className="row">
                                                    <div className="col-sm-1">
                                                        <i className={category.icon}></i>
                                                    </div>
                                                    <div className="col-sm-11 my-auto">  {category.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Col> : "")
                        })}

                    </div>
                    <div>

                        <div className="row justify-content-center">

                            {this.state.resources.map(resource => {
                                return (
                                    <Col size="-6">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    {/* <p><img className="placeHolderImg img-fluid" src={placeholder} alt="card image" /></p> */}
                                                    <h1 className="cardTitle">{resource.org_name}</h1>
                                                    <p className="orgContact">{resource.org_contact}</p>
                                                    <p className="orgWebsite">{resource.org_website}</p>

                                                </div>
                                                <div className="flip-card-back">

                                                    <h4 className="cardBackTitle">Our Work</h4>
                                                    <br></br>
                                                    <p className="orgDescrip">{resource.org_description}</p>
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



        );
    };
}

export default Services;