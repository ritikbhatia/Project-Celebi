import React, { useState,  useEffect } from "react";
import "./CurrentTeam.css";

const CurrentTeam = ({ props }) => {
    console.log(props);
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

export default CurrentTeam;
