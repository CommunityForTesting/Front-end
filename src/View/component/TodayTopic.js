import { React, useState } from "react";
import TodayTopicBox from "View/component/TodayTopicBox";
import PostBox from "View/component/PostBox";
import { Grid, Box, Icon, Button } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

const TodayTopic = (props) => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(
      <PostBox key={i} post_id={i} history={props.history} title={i}></PostBox>
    );
  }
  return (
    <Grid className="today-topic">
      <Grid className="today-title-box">
        <Box className="today-title-text">오늘의 주제</Box>
        <Box className="today-title-border"></Box>
        <Box className="today-title-icon">
          <LaunchIcon />
        </Box>
      </Grid>
      <TodayTopicBox
        todayTopic={props.todayTopic}
        popularPost={arr}
      ></TodayTopicBox>
    </Grid>
  );
};

export default TodayTopic;
