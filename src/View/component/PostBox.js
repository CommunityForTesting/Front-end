import React from "react";
import { Button, Box } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";

function PostBox(props) {
  const url = "";
  return (
    <Box className="post-class">
      <Button
        className="post-button"
        onClick={() => {
          if (props.history) props.history.push(url);
        }}
      >
        <div className="post-field-box">갤럭시</div>
        <div className="post-info-box">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.2rem",
              }}
            >
              한국인이면 갤럭시 쓰자
            </div>
            <div
              style={{
                marginLeft: "10px",
                opacity: 0.6,
              }}
            >
              [136]
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="with-icon">
              <ThumbUpIcon className="icon-with-count" />
              <div>122,222</div>
            </div>
            <div className="with-icon">
              <VisibilityIcon className="icon-with-count" />
              <div>136</div>
            </div>
            <div className="popular-post-createtime">2021-01-14 12:42</div>
          </div>
        </div>
        <div className="post-image-box">사진</div>
      </Button>
    </Box>
  );
}

export default PostBox;
