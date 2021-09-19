import React from "react";
import ComingSoonBot from "./ComingSoonBot";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import "./App.css";
// import NewPost from "./NewPost"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function ComingSoon() {
  return (
    <div className="App container">
        <SideNav />
        <Main>
            <Header />
            <ComingSoonBot />
        </Main>
    </div>
  );
}

export default ComingSoon;