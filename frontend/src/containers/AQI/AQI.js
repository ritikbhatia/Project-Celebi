import React from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import Main from '../Main';

import SearchCities from './SearchCities';
import './AQI.css';

function AQI(data) {
  return (

    <div className="App container">

      <h1>Live Air Quality Index(AQI)</h1>
      <SearchCities data={data.data} />

    </div>
  );
}

export default AQI;
