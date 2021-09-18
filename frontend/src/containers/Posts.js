import React from "react";
import "./Posts.css";
import PostItem from "./PostItem";

function Posts() {
  const posts = [
    {
      upvote: 547,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "Questions about new wallet",
      comments_count: 284,
      user: "theindependentonline",
      subreddit: "politics",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default Posts;
