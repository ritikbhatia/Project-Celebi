import React from "react";
import "./App.css";
import Login from "./Login"
import Home from "./Home";
import AQI from "./AQI/AQI";
import MapHome from "./Map/MapHome";
import Dashboard from "./Dashboard";
import Search from "./News/Search";
import '../containers/News/Search.css';


function App() {
  return (
      <div>
        {/* <Login/> */}
        {/* <AQI /> */}
        {/* <Posts /> */}
        {/* <Home /> */}
        <Dashboard />
        <Search />
        
      // </div>

      
      // <div className="App">

      //   <Search default="bbc-news" />

      // </div>
    
  );
}

export default App;
