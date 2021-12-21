import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/35194820?v=4 "
        message="Wow this works"
        timestamp="This is a timestamp"
        userName="Origogi"
        image="https://blog.kakaocdn.net/dn/0q9tN/btqXJV8DnMJ/gtK996QYY7yrvvSxrVPAbK/img.gif"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/35194820?v=4 "
        message="Wow this works"
        timestamp="This is a timestamp"
        userName="Origogi"
        image="https://i2.tcafe2a.com/210611/014c7e45bc0d9edcc4d0c23e9f9876fc_1623423537_0078.gif"
      />
    </div>
  );
}

export default Feed;
