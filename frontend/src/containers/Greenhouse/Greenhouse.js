import React from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import Main from '../Main';

import SearchGH from './Search';
import './AQI.css';

function Greenhouse(data) {
  return (

    <div className="App container">

      
      <SearchGH data={data.data} />

    </div>
  );
}

export default Greenhouse;