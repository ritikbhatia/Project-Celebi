import React, { useState, useEffect } from 'react';
import db from "../Firestore";
import { Col, Row } from 'reactstrap'

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
                // <div className="leaderboard_item">
                //     <div className="team_name float-child">{team.name}</div>
                //     <div className="team_points float-child">{team.points}</div>
                //     <br />
                // </div>
                <table>
                    {/* <tr>
                        <th>Team</th>
                        <th>Points</th>
                    </tr> */}
                    <tr>
                        <td>{team.name}</td>
                        <td>{team.points}</td>
                    </tr>
                </table>
                // <Row className="">
                //     <Col>
                //     <p>{team.name}</p>
                //     </Col>
                //     <Col>
                //     <p>{team.points}</p>
                //     </Col>
                // </Row>
            ))}
        </div>
    );
}

export default Leaderboard;