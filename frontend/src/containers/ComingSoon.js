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
        <div className="current_team">
          <h2 className="news-header">Organizations</h2>
          <h3 className="news-subheader">The organizations are not here yet, but they will be joining us for a sustainable future soon :D</h3>
        </div>
        <ComingSoonBot />
      </Main>
    </div>
  );
}

export default ComingSoon;