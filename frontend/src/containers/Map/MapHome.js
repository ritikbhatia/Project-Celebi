import React, { Component } from 'react';
import AQI from '../AQI/AQI';
import Map from './Map';

class MapHome extends Component {

	render() {
		return(
			<div style={{ marginBottom: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 1.3483, lng: 103.6831}}
					height='60vh'
					width='100vw'
					zoom={15}
				/>
			
			</div>
		);
	}
}

export default MapHome;