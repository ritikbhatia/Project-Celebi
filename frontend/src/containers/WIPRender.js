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
                    
                    <WIP />
                </Main>
            </div>
        )
    }
}
