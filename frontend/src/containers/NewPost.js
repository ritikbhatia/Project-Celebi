import React from "react";
import "./NewPost.css"
import db from "./Firestore"

const NewPost = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    function show(){
        if (userData != undefined){
            document.getElementById("popup").style.display = "block";
        }
        else {
            alert("Please log in before posting.");
        }
    }
    function hide() {
        document.getElementById("popup").style.display = "none";

        document.getElementById("new_title").value = "";
        document.getElementById("new_url").value = "";
    }

    const handleSubmit = async () => {
        var new_title = document.getElementById("new_title").value;
        var new_url = document.getElementById("new_url").value;

        if (new_title.trim() == "") {
            alert("Please enter a valid title.")
        } else {
            const date = new Date();
            // const nocache_url = `${new_url==""?"http://cdn.onlinewebfonts.com/svg/img_519597.png":new_url}?dt=${Date.now()}`;
            console.log([new_title, new_url]);

            await db.collection("posts").add({
                title: new_title,
                upvotes: 0,
                comments: 0,
                createdAt: date.toUTCString(),
                image: (new_url==""?"http://cdn.onlinewebfonts.com/svg/img_519597.png":new_url),
                user: userData.name,
                team: (userData.team==undefined?"#global":userData.team),
            })
            .then(hide());
        }
    }
    
    return (
        <div className='buttonContainer'>
        <button id="add" onClick={show}>+ Add a New Post or Discussion</button>

        <div id="popup">
            <form id="form">
                <button type="button" id="close" onClick={hide}>X</button>
                <br />
                Title:
                <br />
                <input id="new_title" name="new_title" type="text"/>
                <br />
                Image URL (leave blank for discussions):
                <br />
                <input id="new_url" name="new_url" type="text"/>
                <br />
                <button type="button" id="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default NewPost;
