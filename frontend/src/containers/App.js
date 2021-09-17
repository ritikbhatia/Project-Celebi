import React from "react";
import "./App.css";
import Login from "./Login"
import Map from "./Map";
import Home from "./Home";
import AQI from "./AQI/AQI";
// import Posts from "./Discussion/Posts";
// import MyGoogleMap from "./Map/MyGoogleMap";
import MapContainer from "./Map/MapContainer";

function App() {
  return (
      <div className="App container">
        {/* <Login/> */}
        {/* <AQI /> */}
        {/* <Posts /> */}
        {/* <Home /> */}
        <MapContainer />
        
      </div>
    //   <div className="main-wrapper">
    //   <MyGoogleMap />
    // </div>
  );
}

export default App;
