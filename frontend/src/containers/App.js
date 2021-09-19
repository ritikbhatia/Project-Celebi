import React from "react";
import "./App.css";
import Login from "./Login"
import Home from "./Home";
import AQI from "./AQI/AQI";
import MapHome from "./Map/MapHome";
import Dashboard from "./Dashboard";
import Search from "./News/Search";
import '../containers/News/Search.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ServeNews from "./News/ServeNews";
import Landing from "./Landing";
import Volunteer from "./Volunteer/Volunteer";
import Profile from "./Profile/Profile";


function App() {
  return (
    // <div>
    //   {/* <Login/> */}
    //   {/* <AQI /> */}
    //   {/* <Posts /> */}
    //   {/* <Home /> */}
    //   {/* <Dashboard /> */}
    // </div>


    // <div className="App">

    //   <Search default="bbc-news" />

    // </div>

    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/analytics' component={Dashboard} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/news' component={ServeNews} />
        <Route exact path='/volunteer' component={Volunteer} /> 
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
