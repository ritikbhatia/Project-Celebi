import React from "react";
import "./App.css";
import Login from "./Login"
import Home from "./Home";
import AQI from "./AQI/AQI";
import MapHome from "./Map/MapHome";
import Dashboard from "./Dashboard";


function App() {
  return (
      <div className="App container">
        {/* <Login/> */}
        {/* <AQI /> */}
        {/* <Posts /> */}
        {/* <Home /> */}
        <Dashboard />
        
      </div>
    
  );
}

export default App;
