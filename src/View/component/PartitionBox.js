import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";
import { Grid, Box, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function PartitionBox(props) {
  let history = useHistory();
  return (
    <Grid className="partition-box">
      <Box className="partition-text">{props.title}</Box>
      <Box className="partition-line"></Box>
      {props.url ? (
        <IconButton
          className="partition-icon"
          onClick={() => {
            history.push(props.url);
            window.scrollTo(0, 0);
          }}
        >
          <LaunchIcon />
        </IconButton>
      ) : undefined}
    </Grid>
  );
}

export default PartitionBox;
