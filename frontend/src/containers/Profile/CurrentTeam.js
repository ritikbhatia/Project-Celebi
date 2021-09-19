import React, { useState,  useEffect } from "react";
import "./CurrentTeam.css";

const CurrentTeam = ({ props }) => {
    console.log(props);

    if (props.name != "") {
        return (
            <div className="current_team">
                Your current team is:
                <br />
                Team Name: {props.name}
                <br />
                Description: {props.description}
                <br />
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
