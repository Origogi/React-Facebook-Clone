import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setPosts(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          userName={post.userName}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
