import React, { Component } from 'react'
import MapHome from './Map/MapHome';
import AQI from './AQI/AQI';
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="App container">
                <SideNav />
                <Main>
                    <Header />
                    <MapHome />
                    <AQI />
                </Main>
            </div>
        )
    }
}