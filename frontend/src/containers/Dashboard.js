import React, { Component } from 'react'
import MapHome from './Map/MapHome';
import AQI from './AQI/AQI';
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Search from "./News/Search";
import './News/Search.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="App container">
                <SideNav />
                <Main>
                    <Header />
                    {/* <MapHome />
                    <AQI /> */}
                    <Search default="bbc-news" />
                </Main>
            </div>
        )
    }
}