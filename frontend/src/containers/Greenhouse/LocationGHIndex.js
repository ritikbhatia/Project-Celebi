import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import moment from 'moment';


const CityGHI = props => {
    console.log(props)
    const [showDetails, setShowDetails] = useState(false);
    const data = props.data[0].data
    console.log(data)
    const carbonEmissions = data.tcco + data.tc_ch4 + data.tc_c5h8 + data.tc_c3h8 + data.tchcho + data.tc_c2h6;
    const harmfulGases = data.tcno2 + data.tc_pan + data.tc_no + data.tc_hno3 + data.tc_h2o2 + data.tc_oh + data.tcso2;
    const ozone = data.gtco3;
    const aerosol = data.aod550;
    console.log(data)
    // const placeName = props.cityInfo.station.name;
    // const atTime = props.cityInfo.time.stime;
    // const uid = props.cityInfo.uid;

    const getCategorizedGH = GHScore => {
        let className = 'unknown';
        let impact = 'Unknown';

        if (GHScore <= 0.0001) {
            impact = 'Good';
            className = 'good';
        } else if (GHScore >= 0.0001 && GHScore <= 0.001) {
            impact = 'Low';
            className = 'unhealthy-sentitive';
        } else if (GHScore >= 0.001 && GHScore <= 0.01) {
            impact = 'Moderate';
            className = 'unhealthy';
        } else if (GHScore >= 0.01 && GHScore <= 0.1) {
            impact = 'High';
            className = 'very-unhealthy';
        } else if (GHScore >= 0.1) {
            impact = 'Very High';
            className = 'hazardous';
        }

        let catagorized = {};
        catagorized['impact'] = impact;
        catagorized['className'] = className;

        return catagorized;
    };

    const getAtTimeFormatted = time => {
        return moment(time).format('h:mm:ss a');
    }
    return (
        <div>
            {/* <Row>
            <Col sm="4">
                <Card body inverse color="danger">
                <CardTitle tag="h5">Carbon Emissions:  { carbonEmissions }</CardTitle>
                <CardText><b>{ getCategorizedGH(carbonEmissions).impact }</b></CardText>
                
                </Card>
            </Col>
            <Col sm="4">
                <Card body inverse color="success">
                <CardTitle tag="h5">Harmful Gases - { harmfulGases }</CardTitle>
                <CardText><b>{ getCategorizedGH( harmfulGases).impact }</b></CardText>
                
                </Card>
            </Col> */}
            {/* <Col sm="4">
                <Card body inverse color="warning">
                <CardTitle tag="h5">Ozone:  { ozone }</CardTitle>
                <CardText><b>{ getCategorizedGH(ozone).impact }</b></CardText>
                
                </Card>
            </Col>
            <Col sm="4">
                <Card body inverse color="danger">
                <CardTitle tag="h5">Aerosol (at 550nm)- { aerosol }</CardTitle>
                <CardText><b>{ getCategorizedGH( aerosol).impact }</b></CardText>
                
                </Card>
            </Col> */}
            {/* </Row> */}

            <div
                style={{ margin: '20px' }}
                className={`cityInfo ${getCategorizedGH(carbonEmissions).className}`}
                onClick={() => setShowDetails(!showDetails)}>
                <span>Carbon Emissions:  {carbonEmissions}</span>
                <div><b>{getCategorizedGH(carbonEmissions).impact}</b></div>
                {/* { showDetails && <CityAQIDetails uid={ uid } /> } */}
            </div>
            <div style={{ margin: '20px' }}
                className={`cityInfo ${getCategorizedGH(harmfulGases).className}`}
                onClick={() => setShowDetails(!showDetails)}>
                <span> Harmful Gases - {harmfulGases}</span>
                <div><b>{getCategorizedGH(harmfulGases).impact}</b></div>
                {/* { showDetails && <CityAQIDetails uid={ uid } /> } */}
            </div>
            <div style={{ margin: '20px' }}
                className={`cityInfo ${getCategorizedGH(ozone).className}`}
                onClick={() => setShowDetails(!showDetails)}>
                <span> Ozone - {ozone}</span>
                <div><b>{getCategorizedGH(ozone).impact}</b></div>
                {/* { showDetails && <CityAQIDetails uid={ uid } /> } */}
            </div>
            <div style={{ margin: '20px' }}
                className={`cityInfo ${getCategorizedGH(aerosol).className}`}
                onClick={() => setShowDetails(!showDetails)}>
                <span> Aerosol (at 550nm)- {aerosol}</span>
                <div><b>{getCategorizedGH(aerosol).impact}</b></div>
                {/* { showDetails && <CityAQIDetails uid={ uid } /> } */}
            </div>
        </div>
    )
};

export default CityGHI;




