import React from "react";
import { Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MessageIcon from "@material-ui/icons/Message";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function PostBox(props) {
  const url = "./Post?post_id=" + props.post_id;
  return (
    <Button
      className="popular-post-button"
      onClick={() => {
        if (props.history) props.history.push(url);
      }}
    >
      <div className="with-icon">
        <div>122,222</div>
        <ThumbUpIcon className="icon-with-count" />
      </div>
      <div className="with-icon">
        <div>136</div>
        <MessageIcon className="icon-with-count" />
      </div>
      <div className="popular-post-content">한국인이면 갤럭시 쓰자</div>
      <KeyboardArrowRightIcon className="post-link-button" />
    </Button>
  );
}

export default PostBox;
