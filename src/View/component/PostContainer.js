import React from "react";
import { Grid } from "@material-ui/core";

function PostContainer(props) {
  return (
    <Grid>
      <Grid>
        <div>{props.title}</div>
        <div>{props.updateTime}</div>
      </Grid>
      <div>{props.content}</div>
    </Grid>
  );
}

export default PostContainer;
