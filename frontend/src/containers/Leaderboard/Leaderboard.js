import React, { useState, useEffect } from 'react';
import db from "../Firestore";

function Leaderboard() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        // Hook to handle the real-time updating of leaderboard whenever there is a
        // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

        db.collection("teams")
            .orderBy("points", "desc")
            .onSnapshot(querySnapshot => {
                const _posts = []

                querySnapshot.forEach(doc => {
                    _posts.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                })

                setTeams(_posts)
            })
    }, [])

    return (
        <div className="leaderboard_container">
            {teams.map((team) => (
                <div className="leaderboard_item">
                    <div className="team_name">{team.name}</div>
                    <div className="team_points">{team.points}</div>
                </div>
            ))}
        </div>
    );
}

export default Leaderboard;