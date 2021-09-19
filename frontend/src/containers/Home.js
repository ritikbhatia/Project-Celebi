import React, { Component } from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import NewPost from "./NewPost"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class Home extends Component {
  render() {
      return (
        <div className="App container">
          <SideNav />
          <Main>
              <Header />
              <NewPost />
              <Posts />
          </Main>
        </div>
      )
  }
}
