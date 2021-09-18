import React, { useState, useEffect } from "react";
import "./PostItem.css";
import { Link } from "react-router-dom";
import db from "./Firestore"


function PostItem(props) {
  const [votes, setVotes] = useState(0);  // stores votes of current post
  const [imageUrl, setImageUrl] = useState("http://cdn.onlinewebfonts.com/svg/img_519597.png");
  const [votedPosts, setVotedPosts] = useState({});  // stores object of all posts voted by user
  const [voteState, setVoteState] = useState(0);  // stores user's current vote for this post
  
  const { post } = props;

  useEffect(() => {
    const votesFromLocalStorage = localStorage.getItem("votes") || {}
    let previousVotes = {}
    try {
        // Parse the value of the item from localStorage. If the value of the
        // items isn't an array, then JS will throw an error.
        previousVotes = JSON.parse(votesFromLocalStorage);
    } catch (error) {
        console.error(error);
    }
    setVotedPosts(previousVotes);
    if (post.id in votedPosts) {
      setVoteState(previousVotes[post.id]);
    }

    setVotes(post.upvotes);
    if ("image" in post) {
      setImageUrl(post.image);
    }
  }, []);


  const title = post.title
  const link = title.toLowerCase().replaceAll(" ", "-")

  const handleClick = async type => {
    let change = 0;
    if (type=="upvote") {
      if (voteState == 1){  // user had previously upvoted post and is unupvoting
        change = -1;
      }
      else {
        change = 1 - voteState;  // handles change from downvote to upvote
      }
    }
    else {
      if (voteState == -1){
        change = 1;
      }
      else {
        change = -1 - voteState
      }
    }

    const previousVotes = votedPosts;
    previousVotes[post.id] = voteState;
    localStorage.setItem("votes", JSON.stringify(previousVotes))
    
    await db
    .collection("posts")
    .doc(post.id)
    .update({
      upvotes: votes+change
    })
    .then(console.log(`Changed votes to ${votes+change}`))
    .then(setVoteState(prevCount => prevCount+change))
    .then(setVotes(prevCount => prevCount+change))
  }

  return (
    <div className="post">
      <div className="post__left">
        <div className="upvoteBtn" style={{color: voteState==1?"orangered":"", fontSize: voteState==1?"xx-large":""}}>
          <i className="fas fa-caret-up" onClick={() => handleClick("upvote")} style={{"pointerEvents": "all", cursor: "pointer"}} />
        </div>
        <span>{votes}</span>
        <div className="downvoteBtn" style={{color: voteState==-1?"dodgerblue":"", fontSize: voteState==-1?"xx-large":""}}>
          <i className="fas fa-caret-down"onClick={() => handleClick("downvote")} style={{"pointerEvents": "all", cursor: "pointer"}} />
        </div>
      </div>
      <div className="post__center">
        <img src={imageUrl} alt="" />
      </div>
      <div className="post__right">
        <h3><Link to={`/${post.team}/${link}`}>{post.title} </Link></h3>
        <span className="post__info">
          submitted on {post.createdAt} by
          <Link to={`/u/${post.user}`}> {post.user}</Link> to{" "}
          <Link to={`/r/${post.team}`}> {post.team}</Link>
        </span>
        <p className="post__info">
          <Link to={`/${post.team}/${link}/comments`}>
            {post.comments} comments
          </Link>{" "}
          | share | save | hide | report
        </p>
      </div>
    </div>
  );
}

export default PostItem;
