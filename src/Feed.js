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
        profilePic="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/1010076_477783955633350_1900224762_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lJOurCSMot4AX8k8KuN&tn=W3PhfU3NUdCI-4Su&_nc_ht=scontent-ssn1-1.xx&oh=00_AT98xLdFtXzHO--vKvdYc01TfjzaMCAQmu-9vS1Y9AIevw&oe=61E53CC1"
        message="Wow this works"
        timestamp="This is a timestamp"
        userName="Origogi"
        image="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/238073759_4104163382995371_5769779480473560584_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=R922wpBHkekAX9M2v_t&tn=W3PhfU3NUdCI-4Su&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9gVYxRK20dDiCfGU1FxO269Jk6PQ6IqXu1RpcYX8ivDA&oe=61C70AF1"
      />
      <Post
        profilePic="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/69563903_3014898355248679_7611766459034763264_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MrcA3Dbph2sAX83eyi3&tn=W3PhfU3NUdCI-4Su&_nc_ht=scontent-ssn1-1.xx&oh=00_AT-As7-ZoRE5mOcSqBszMYnbjD0TUBiiAPra8_lH-V1bmQ&oe=61E697D2"
        message="Wow this works"
        timestamp="This is a timestamp"
        userName="Origogi"
        image="https://1.bp.blogspot.com/-b1_n6tOHvWU/YKMssWEjo-I/AAAAAAAAQjk/vIJQsAPUpRQKxR44GoCbm3CtRgr8tVBKACLcBGAsYHQ/s0/Android_NewForDevelopers_1024x512_updated.png"
      />
    </div>
  );
}

export default Feed;
