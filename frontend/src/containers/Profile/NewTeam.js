import React from "react";
import "./NewTeam.css";
import db from "../Firestore";

const NewTeam = (props) => {
    const { user } = props;

    function show(){
        document.getElementById("popup").style.display = "block";
    }
    function hide() {
        document.getElementById("popup").style.display = "none";

        document.getElementById("new_title").value = "";
        document.getElementById("new_desc").value = "";
    }

    async function handleJoin (teamname) {
        await db.collection('users').doc(user.email)
        .update(
            {
                "team":teamname
            }
        )
        .then(alert(`Successfully created and joined ${teamname}!`));

    }

    const handleSubmit = async () => {
        var new_title = document.getElementById("new_title").value;
        var new_desc = document.getElementById("new_desc").value;

        if (new_title.trim() == "" || new_desc.trim() == "") {
            alert("Please enter a valid team name and description.")
        } else {
            const date = new Date();
            let mod_title = "#team"+new_title;
            console.log([mod_title, new_desc]);

            await db.collection("teams").doc(mod_title)
            .set(
                {
                    name: mod_title,
                    description: new_desc,
                    createdAt: date.toUTCString(),
                    points: 0
                }
            )
            .then(handleJoin(mod_title))
            .then(hide());
        }
    }
    
    return (
        <div className='buttonContainer'>
        <button id="add" onClick={show}>+ Create a New Team for your community</button>

        <div id="popup">
            <form id="form">
                <button type="button" id="close" onClick={hide}>X</button>
                <br />
                Team Name:
                <br />
                <div style={{display: "flex", alignItems: "baseline"}}>#team<input id="new_title" name="new_title" type="text"/></div>
                <br />
                Team Description:
                <br />
                <input id="new_desc" name="new_desc" type="text"/>
                <br />
                <button type="button" id="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default NewTeam;
