import React from "react";
import "./App.css";
import Login from "./Login"
import Map from "./Map";
import Home from "./Home";
import AQI from "./AQI/AQI";
import Posts from "./Discussion/Posts";
// import Dashboard from "./Analytics/Dashboard";

function App() {
  return (
      <div className="App container">
        {/* <Login/> */}
        {/* <AQI /> */}
        <Posts />
        {/* <Home /> */}
      </div>
  );
}

export default App;
