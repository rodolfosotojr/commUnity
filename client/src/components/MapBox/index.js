import React, { Component } from 'react';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl} from 'react-map-gl';
import MapMarker from '../MapMarker';
import './style.css'

const TOKEN = "pk.eyJ1IjoiY3JvZHJpIiwiYSI6ImNqdm42ZmNzYjFlNmczeXBiZW01MmQydXAifQ.d5FzYKJaPQJisDkKwe6RgQ"; 


const data = [
    {
        lat: 41.879160,
        lng: -87.626230

    }
]
class MapBox extends Component {
    state = {
            viewport: {
                latitude: 41.879160,
                longitude: -87.626230,
                zoom: 16.5,
                bearing: 0,
                pitch: 0
            },
            popupInfo: null
        }

    updateViewport = (viewport) => {
        this.setState({viewport});
    }

    renderMarker = (marker, index) => {
        console.log(index)

        return (
          <Marker 
            key={`marker-${index}`}
            longitude={marker.lng}
            latitude={marker.lat} 
            anchor={"bottom"}
            
            >
          <MapMarker />

          </Marker>
        );
      }
    renderPopup() {
        const {popupInfo} = this.state;
        console.log("clicked")
        
        return popupInfo && (
          <Popup tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => this.setState({popupInfo: null})} >
            <h1 style={{height:"40px", width:"40px"}}> Some info </h1>
          </Popup>
        );
      }
    render() {

        const {viewport} = this.state;
    
        return (
            <div style={{height:"100vh", width:"100%"}}>
          <MapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={this.updateViewport}
            mapboxApiAccessToken={TOKEN} >

            { data.map(this.renderMarker) }

            {this.renderPopup()}

            <div className="fullscreenControlStyle fullscreen">
                <FullscreenControl />
            </div> 
            <div className="nav navStyle">
                <NavigationControl onViewportChange={this.updateViewport} />
            </div>
        */}
            {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}

            </MapGL>
          </div>
        );
    }
    
}



export default MapBox;