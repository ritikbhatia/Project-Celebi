import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Home() {
  return (
    <div className="App container">
        <SideNav />
        <Main>
            <Header />
            <Posts />
        </Main>
    </div>
  );
}

export default Home;