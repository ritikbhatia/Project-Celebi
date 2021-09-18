import React, { Component } from 'react'
import SideNav from "../SideNav";
import Header from "../Header";
import Main from "../Main";
import Search from "./Search";
import './Search.css';

export default class ServeNews extends Component {
    render() {
        return (
            <div className="App container">
                <SideNav />
                <Main>
                    <Header />
                    <Search default="bbc-news" />
                </Main>
            </div>
        )
    }
}