import React, {Component} from 'react';

class MapMarkerInfo extends Component {
    render(){
    const {info} = this.props;
    return (
        <div>
            <h7>{info.org_name}</h7>
            <h7>{info.org_location}</h7>
        </div>

        )

    }
}

export default MapMarkerInfo;