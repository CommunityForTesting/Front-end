import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";
import { Grid, Box } from "@material-ui/core";

function PartitionBox(props) {
  return (
    <Grid className="partition-box">
      <Box className="partition-text">{props.title}</Box>
      <Box className="partition-line"></Box>
      <Box className="partition-icon">
        <LaunchIcon />
      </Box>
    </Grid>
  );
}

export default PartitionBox;
