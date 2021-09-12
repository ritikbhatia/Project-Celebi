import React from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import Main from '../Main';

import SearchCities from './SearchCities';
import './AQI.css';

function AQI() {
  return (

    <div className="App container">
        <SideNav />
        <Main>
            <Header />
            <h1>Live Air Quality Index(AQI)</h1>
            <SearchCities />
        </Main>
    </div>
  );
}

export default AQI;
