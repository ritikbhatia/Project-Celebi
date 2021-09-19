import React, { Component, useContext } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { GoogleMapsAPI } from '../config'
Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();
// import { Context } from '../globalStore/Store';
import AQI from '../AQI/AQI';
import Greenhouse from '../Greenhouse/Greenhouse';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { footprintRatio, totalFootprintArea } from '../OpenStreet/OpenStreet';
import StreetFootprint from '../OpenStreet/StreetFp.jpeg';
import CityFootprint from '../OpenStreet/CityFp.jpeg';
class Map extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	componentDidMount() {
		Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray);

				console.log('city', city, area, state);

				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
				})

			},
			error => {
				console.error(error);
			}
			
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if (this.props.center.lat === nextProps.center.lat) {
			return false
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getCity = (addressArray) => {
		let city = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
				city = addressArray[i].long_name;
				return city;
			}
		}
	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = (addressArray) => {
		let area = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0]) {
				for (let j = 0; j < addressArray[i].types.length; j++) {
					if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
						area = addressArray[i].long_name;
						return area;
					}
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getState = (addressArray) => {
		let state = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
					state = addressArray[i].long_name;
					return state;
				}
			}
		}
	};
	/**
	 * And function for city,state and address input
	 * @param event
	 */

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		const [state, dispatch] = useContext(Context);
		dispatch({type: 'set', payload: {'location':this.state.area, 'markerPosition':this.state.markerPosition}})
		console.log(state)
		
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = (event) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray);
				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				})
			},
			error => {
				console.error(error);
			}
		);
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = (place) => {
		// console.log('plc', place);
		const address = place.formatted_address,
			addressArray = place.address_components,
			city = this.getCity(addressArray),
			area = this.getArea(addressArray),
			state = this.getState(addressArray),
			latValue = place.geometry.location.lat(),
			lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({
			address: (address) ? address : '',
			area: (area) ? area : '',
			city: (city) ? city : '',
			state: (state) ? state : '',
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})
		
	};


	render() {
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={this.props.google}
						defaultZoom={this.props.zoom}
						defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
							name={'Dolores park'}
							draggable={true}
							onDragEnd={this.onMarkerDragEnd 
							}
							position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />
						{/* For Auto complete Search Box */}
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								paddingTop: '1px',
								marginTop: '10px',
								marginBottom: '500px',
								borderRadius: '50px'
							}}
							onPlaceSelected={this.onPlaceSelected}
							types={['(regions)']}
						/>
					</GoogleMap>
				)
			)
		);
		
		let map;
		if (this.props.center.lat !== undefined) {
			map =
				<Container style={{width:'100%', display:'flex', justifyContent:'space-evenly', alignItems:'stretch'}}>
				<Row width='8' style={{width:'100%', display:'flex', justifyContent:'space-evenly', alignItems:'stretch'}}>
					<Col width='12' style={{width:'100%', justifyContent:'space-evenly', alignItems:'stretch'}}>
				<AsyncMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
				
				
				<div style={{ marginTop: '10vh' }}>
					{/* <div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.city} />
						
					</div> */}
					<div className="form-group">
						<label htmlFor="" style={{fontWeight:"Bolder"}}>Location</label>
						<input style={{width: '100%',
								height: '40px',
								paddingLeft: '16px',
								paddingTop: '1px',
								marginTop: '10px',
								borderRadius: '50px' }} type="text" name="area" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.area} />
					</div>
					{/* <div className="form-group">
						<label htmlFor="">State</label>
						<input type="text" name="state" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.state} />
					</div> */}
					{/* <div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.address} />
					</div> */}
					{/* <div className="form-group">
						<label htmlFor="">Latitude</label>
						<input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.mapPosition.lat} />
					</div>
					<div className="form-group">
						<label htmlFor="">Longitude</label>
						<input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.mapPosition.lng} />
					</div> */}
				
				</div>
				<label htmlFor="" style={{fontWeight:"Bolder"}}>Cityscape Metrics</label>

				<Container style={{width:'100%', marginTop:"20px", display:'flex', justifyContent:'space-evenly', alignItems:'stretch', minHeight:'100vh'}}>
					<Row width='8' style={{width:'100%', display:'flex', justifyContent:'space-evenly', alignItems:'stretch'}} >
						<Col width='8'>
						<label htmlFor="" style={{fontWeight:"Bolder"}}><b>One Squaremile Building and Street Footprint</b></label><br />
						<img src={StreetFootprint} height={'180px'} width={'220px'} alt="Street Foot Print"/>
						</Col>
						<Col><label htmlFor="" style={{fontWeight:"Bolder"}}><b>Citywide Building Footprint</b></label><br />
						<img src={'https://i.ibb.co/Kb0Q0dm/CityFp.jpg'} height={'180px'} width={'220px'} alt="City Building Footprint"/>
						{/* <a href="https://ibb.co/vVwrwpD"><img src="https://i.ibb.co/Kb0Q0dm/CityFp.jpg" alt="CityFp" border="0"></a> */}
						{/* <iframe src="https://drive.google.com/file/d/1jftJ91j8ji6Z6L0Q203CsZA0Tav-0TGt/preview" width="220" height="180" allow="autoplay"></iframe> */}
						</Col>
					</Row>
					<Row>
					<Col style={{margin:"20px", padding:"10px", borderRadius:"20px", backgroundColor:"#e9edc9", textAlign:"center"}}>
						<label htmlFor="" style={{fontWeight:"Bolder"}}>Total Building Footprint </label><br />
						{totalFootprintArea} m<sup>2</sup>

						</Col>
						<Col style={{margin:"20px", padding:"10px", borderRadius:"20px", backgroundColor:"#e9edc9", textAlign:"center"}}>
						<label htmlFor="" style={{fontWeight:"Bolder"}}><b>Percentage Building Footprint</b></label><br />
						{footprintRatio}
						</Col>
					</Row>
				</Container>
				</Col>
				</Row>
				<Row width='4'>
				{/* <Jumbotron fluid >
        		<Container fluid> */}
				<Col style={{marginLeft:"20px", borderRadius:"20px", backgroundColor:"#e9edc9", textAlign:"center"}}>
				<label style={{padding:"20px", fontWeight:"Bolder"}}> Air Quality Index (Normalised to AQI Scale) </label>
				<AQI data={this.state.area} />
				</Col>
				{/* </Container>
      			</Jumbotron> */}
				{/* <Jumbotron fluid>
        		<Container fluid> */}
				<Col style={{marginLeft:"20px", marginTop:"20px",borderRadius:"20px", backgroundColor:"#e9edc9", textAlign:"center"}}>
				<label style={{padding:"20px", fontWeight:"Bolder"}}>Greenhouse Index (amt in Kg/m<sup>2</sup>)</label>
				<Greenhouse data={{'lat':this.state.mapPosition.lat, 'lon':this.state.mapPosition.lng}} />
				
				</Col>
				{/* </Container>
      			</Jumbotron> */}
				</Row>


				</Container>	
		} else {
			map = <div style={{ height: this.props.height }} />
		}
		return (map)
		
	}
	
}
export default Map