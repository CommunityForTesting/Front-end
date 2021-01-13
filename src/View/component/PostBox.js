import React from "react";
import { Grid, Button } from "@material-ui/core";

function PostBox(props) {
  const url = "./Post?post_id=" + props.post_id;
  return (
    <Button
      className="popular-post-button"
      onClick={() => {
        if (props.history) props.history.push(url);
      }}
    >
      <div className="popular-post-box"></div>
    </Button>
  );
}

export default PostBox;
