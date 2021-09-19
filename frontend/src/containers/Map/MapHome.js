import React, { Component } from 'react';
import AQI from '../AQI/AQI';
import Map from './Map';

class MapHome extends Component {

	render() {
		return(
				<Map
					google={this.props.google}
					center={{lat: 1.3483, lng: 103.6831}}
					height='50vh'
					width='100vw'
					zoom={15}
				/>
		);
	}
}

export default MapHome;