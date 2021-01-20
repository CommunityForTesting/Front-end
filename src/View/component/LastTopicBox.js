import { Button } from "@material-ui/core";
import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MessageIcon from "@material-ui/icons/Message";

const LastTopicBox = (props) => {
  const loserStyle = {
    title: {
      fontSize: "1.1rem",
      fontFamily: "NotoSansKR-Bold",
      color: "#131313",
      opacity: "0.5",
      marginRight: "12px",
    },
    likes: {
      fontSize: "1rem",
      fontFamily: "NotoSansKR-Regular",
      color: "#131313",
      opacity: "0.5",
    },
  };
  const winnerStyle = {
    title: {
      fontSize: "1.1rem",
      fontFamily: "NotoSansKR-Bold",
      color: "#131313",
      marginRight: "12px",
    },
    likes: {
      fontSize: "1rem",
      fontFamily: "NotoSansKR-Regular",
      color: "#131313",
    },
  };

  return (
    <Button className="last-topic-box">
      <div className="last-field-box">
        <div className="winner-icon" />
        <div style={winnerStyle.title}>갤럭시</div>
        <div style={winnerStyle.likes}>192,222(66%)</div>
      </div>
      <div className="last-field-box">
        <svg className="loser-icon">
          <circle cx="0.5em" cy="0.5em" r="0.3em" opacity="0.3" />
        </svg>
        <div style={loserStyle.title}>아이폰</div>
        <div style={loserStyle.likes}>66,666(33%)</div>
      </div>
      <div style={{ fontSize: "1rem" }}>2021-01-11</div>
      <div className="with-icon">
        <ThumbUpIcon className="icon-with-count" />
        <div>200,000</div>
      </div>
      <div className="with-icon">
        <MessageIcon className="icon-with-count" />
        <div>1,200</div>
      </div>
      <KeyboardArrowRightIcon className="last-topic-button" />
    </Button>
  );
};

export default LastTopicBox;
