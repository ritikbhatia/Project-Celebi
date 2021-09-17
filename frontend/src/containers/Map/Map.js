import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBv8IZVkta7CgAa3nU3pwhtAklZ14tqNPc'
  })(MapContainer);
