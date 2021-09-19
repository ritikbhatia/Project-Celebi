import React, { useState, useEffect } from 'react';
import "./TeamItem.css";
import db from "../Firestore";

function TeamItem(props) {
    const { team, user } = props;

    async function handleJoin () {
        await db.collection('users').doc(user.email)
        .update(
            {
                "team":team.name
            }
        )
        .then(alert(`Team successfully changed to ${team.name}!`));

    }

    return ( 
        <div className="item_container">
        <div className="team_item">
            <h3>{team.name}</h3>
            <span className="team_desc">
                {team.description}
                <br />
                Created on: {team.createdAt}
            </span>
        </div>

        <div className="join_button">
            <button onClick={handleJoin}>Join Team</button>
        </div>
        </div>
    );
}

export default TeamItem;