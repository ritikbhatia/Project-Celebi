import React, { useState,  useEffect } from "react";
import "./CurrentTeam.css";

const CurrentTeam = ({ props }) => {
    console.log(props);

    if (props.name != "") {
        return (
            <div className="current_team">
                <h1 className="news-header">Current Team</h1>
                {/* <br /> */}
                <h3 className="news-subheader">Team - <span style={{fontWeight:"bold"}}>{props.name}</span></h3>
                {/* <br /> */}
                <h3 className="news-subheader"><span style={{fontStyle:'italic'}}>{props.description}</span></h3>
                {/* <br /> */}
                Created on: {props.createdAt}
            </div>
        );
    }
    return (
        <div className="current_team">
            You are not part of any team at the moment.
            <br />
            Create a new team below, or join an existing one!
        </div>
    )
    
}

export default CurrentTeam;
