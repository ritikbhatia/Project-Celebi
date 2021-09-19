import React, { Component } from 'react'
import WIP from './WIP'
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import "./App.css";

export default class WIPRender extends Component {
    render() {
        return (
            <div className="App container">
                <SideNav />
                <Main>
                    <Header />
                    {/* <h2 className="news-header">Crowdfunding</h2>
        <h3 className="news-subheader">You will be able to fund your sustainability drives soon!</h3> */}
                    <WIP />
                </Main>
            </div>
        )
    }
}
