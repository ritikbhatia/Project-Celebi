import React, { Component } from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import NewPost from "./NewPost"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Home() {
  return (
    <div className="App container">
      <SideNav />
      <Main>
        <Header />
        <h2 className="news-header">Discussions</h2>
        <h3 className="news-subheader">Find out how others are changing the world!</h3>
        <NewPost />
        <Posts />
      </Main>
    </div>
  );
}
