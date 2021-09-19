import React, { useState, useEffect } from 'react';
import "./ChangeTeam.css";
import TeamItem from "./TeamItem";
import db from "../Firestore"

const ChangeTeam = (props) => {
  const [teams, setTeams] = useState([]);
  const { user } = props;

  useEffect(() => {
      // Hook to handle the real-time updating of teams whenever there is a
      // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

      db.collection("teams")
          .orderBy("createdAt", "asc")
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
    <div className="teams">
      {teams.map((team) => (
        <TeamItem team={team} user={user}/>
      ))}
    </div>
  );
}

export default ChangeTeam;
