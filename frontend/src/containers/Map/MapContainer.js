import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
               <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBv8IZVkta7CgAa3nU3pwhtAklZ14tqNPc'
  })(MapContainer);
