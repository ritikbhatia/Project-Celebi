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
import Snow from 'react-snow-effect';
import ComingSoon from "./ComingSoon";
// import Celebi from "./Celebi";
import WIPRender from "./WIPRender";

function App() {
  return (

    <BrowserRouter>
      <Snow />
      <Switch>
        <Route exact path='/' component={Login} />
        {/* <Route exact path='/login' component={Login} /> */}
        <Route exact path='/analytics' component={Dashboard} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/news' component={ServeNews} />
        <Route exact path='/volunteer' component={Volunteer} /> 
        <Route exact path='/organizations' component={ComingSoon} />
        <Route exact path='/crowdfunding' component={WIPRender} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
