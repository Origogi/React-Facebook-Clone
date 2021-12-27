import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
      // const querySnapshot = await getDocs(q);
      // setPosts(
      //   querySnapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     data: doc.data(),
      //   }))
      // );
      onSnapshot(q, (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    };
    fetchData();
  }, []);

  posts.forEach((post) => {
    console.log(post);
  });

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          userName={post.data.userName}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
