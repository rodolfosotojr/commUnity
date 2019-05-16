import React, { Component } from 'react';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl} from 'react-map-gl';
import MapMarker from '../MapMarker';
import MapMarkerInfo from '../MapMarkerInfo';
import axios from 'axios';

const TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

const fullScreenStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

 const navigationControlsStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '10px'
};
class MapBox extends Component {
    state = {
            data: [],
            viewport: {
                latitude: 41.879160,
                longitude: -87.626230,
                zoom: 12.5,
            },
            popupInfo: null
        }

    getData = () => {
      axios.get(`api/data/resources/${this.props.tableName}`).then((res)=>{
        console.log(res)
        this.setState( {data: res.data} )
      }).catch(function(err){
        console.log(err)
    })

    }
    componentDidMount = () =>{
      this.getData()
    }
    updateViewport = (viewport) => {
        this.setState({viewport});
    }

    renderMarker = (marker, index) => {
        console.log(index)

        return (
          <Marker 
            key={`marker-${index}`}
            longitude={marker.org_lng}
            latitude={marker.org_lat} 
            anchor={"bottom"}
            
            >
          <MapMarker onClick={() => {this.setState({popupInfo:marker})}}/>

          </Marker>
        );
      }
    renderPopup() {
        const {popupInfo} = this.state;
        console.log("clicked")
        
        return popupInfo && (
          <Popup tipSize={5}
            anchor="top"
            longitude={popupInfo.org_lng}
            latitude={popupInfo.org_lat}
            closeOnClick={false}
            onClose={() => this.setState({popupInfo: null})} >
            <MapMarkerInfo info={this.state.popupInfo}/>
          </Popup>
        );
      }
    render() {
        const {viewport} = this.state;
        return (
          <div style={{height:`${this.props.height}`, width:`${this.props.width}`, padding:`${this.props.padding}`}}>
            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                margin="5px"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this.updateViewport}
                mapboxApiAccessToken={TOKEN} >
                { this.state.data.map(this.renderMarker) }
                {this.renderPopup()}
                <div className="fullscreen" style={fullScreenStyle}>
                    <FullscreenControl />
                </div> 
                <div className="nav" style={navigationControlsStyle}>
                    <NavigationControl onViewportChange={this.updateViewport} />
                </div>
              </MapGL>
          </div>
        );
    }
    
}



export default MapBox;