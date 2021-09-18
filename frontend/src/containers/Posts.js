import React, { useState, useEffect } from "react";
import "./Posts.css";
import PostItem from "./PostItem";
import db from "./Firestore"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      // Hook to handle the real-time updating of posts whenever there is a
      // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

      db.collection("posts")
          .orderBy("createdAt", "desc")
          .onSnapshot(querySnapshot => {
              const _posts = []

              querySnapshot.forEach(doc => {
                  _posts.push({
                      id: doc.id,
                      ...doc.data(),
                  })
              })

              setPosts(_posts)
          })
  }, [])
  
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default Posts;
