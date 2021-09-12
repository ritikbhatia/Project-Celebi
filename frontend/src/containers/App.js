import React from "react";
import "./App.css";
import Login from "./Login"
import Map from "./Map";
import Home from "./Home";
import AQI from "./AQI/AQI";
// import Dashboard from "./Analytics/Dashboard";

function App() {
  return (
      <div className="App container">
        {/* <Login/> */}
        <AQI />
        {/* <Home /> */}
      </div>
  );
}

export default App;
