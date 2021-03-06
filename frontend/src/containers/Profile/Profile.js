import React, { useState, useEffect } from "react";
import "./Profile.css";
import SideNav from "../SideNav";
import Header from "../Header";
import Main from "../Main";
import CurrentTeam from "./CurrentTeam";
import ChangeTeam from "./ChangeTeam";
import NewTeam from "./NewTeam";
import db from "../Firestore";

function Profile () {
    const [team, setTeam] = useState({name: "", description: "", createdAt: ""});
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    useEffect(() => {

        async function fetchTeam() {
            if (userData == undefined) {
                alert("Please log in first!");
                window.location.pathname = "/home";
            }

            console.log(userData.email);
            let u = await db.collection('users').doc(userData.email).get();
            console.log(u.data());
            if (u.data()["team"] != ""){
                let t = await db.collection('teams').doc(u.data()["team"]).get();
                console.log(t.data());
                setTeam(t.data());
            }
        }

        fetchTeam();        
    }, []);

    return (
        <div className="App container">
            <SideNav />
            <Main>
                <Header />
                <CurrentTeam props={team}/>
                <NewTeam user={userData} />
                <ChangeTeam user={userData}/>
            </Main>
        </div>
      );
}

export default Profile;
