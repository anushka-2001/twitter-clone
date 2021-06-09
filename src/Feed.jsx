import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [test, setPosts] = useState([]);

  useEffect(() => {
    db.collection("test").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
    <div className="feed__header">
     <h2>Home</h2>
    </div>

      <TweetBox />

      <FlipMove>
        {test.map((p) => (
          <Post
          key={p.text}
          displayName={p.displayName}
          username={p.username}
          verified={p.verified}
          text={p.text}
          avatar={p.avatar}
          image={p.image}
          />
        ))}
    
    </FlipMove>
    </div>
  );
}

export default Feed;