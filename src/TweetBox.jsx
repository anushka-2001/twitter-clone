import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("test").add({
      displayName: "Anushka B",
      username: "anushkaaaaa",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQG6XBdiWWOUZw/profile-displayphoto-shrink_400_400/0/1616661630170?e=1628121600&v=beta&t=YqamYq6gviGXL-VQrRLQOUsjuwuJ9mr0GcRXpy58DgM",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
      <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQG6XBdiWWOUZw/profile-displayphoto-shrink_400_400/0/1616661630170?e=1628121600&v=beta&t=YqamYq6gviGXL-VQrRLQOUsjuwuJ9mr0GcRXpy58DgM" />
  <input
       className="tweetBox_input"
       onChange={(e) => setTweetMessage(e.target.value)}
  value={tweetMessage}
       placeholder="What's happening?"
            type="text"
          />
        </div>
      <input
       className="tweetBox_inputImage"
         value={tweetImage}
         onChange={(e) => setTweetImage(e.target.value)}
          
         placeholder="Enter image URL"
         type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >Tweet</Button></form>
    </div>
  );
}

export default TweetBox;