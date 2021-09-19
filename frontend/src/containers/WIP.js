import React, { Component } from 'react'
import './WIP.css'

export default class WIP extends Component {
    render() {
        return (
            <div className="wip">
                <p class="text">Sorry<br />Work in progress</p>
                <div class="container-animation">
                    <div class="bg"></div>
                    <div class="arm-left"></div>
                    <div class="blacksmith">
                        <div class="shape">
                            <div class="dress"></div>
                            <div class="dress"></div>
                        </div>
                        <div class="head">
                            <div class="moustache"></div>
                            <div class="moustache"></div>
                            <div class="eye"></div>
                        </div>
                        <div class="arm-right">
                            <div class="hammer"></div>
                        </div>
                    </div>
                    <div class="sword">
                        <div class="handle"></div>
                    </div>
                    <div class="anvil"></div>
                    <div class="fire-box">
                        <div class="fire"></div>
                        <div class="fire"></div>
                        <div class="fire"></div>
                        <div class="fire"></div>
                    </div>
                </div>
                <p class="wip-info">You will be able to fund your sustainability drives soon!</p>
            </div>
        )
    }
}
