import { React, useState } from "react";
import TodayTopicBox from "View/component/TodayTopicBox";
import PostBox from "View/component/PostBox";
import PartitionBox from "View/component/PartitionBox";
import { Grid, Box } from "@material-ui/core";

const TodayTopic = (props) => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(
      <PostBox key={i} post_id={i} history={props.history} title={i}></PostBox>
    );
  }
  return (
    <Grid className="today-topic">
      <PartitionBox title="오늘의 주제"></PartitionBox>
      <TodayTopicBox
        todayTopic={props.todayTopic}
        popularPost={arr}
      ></TodayTopicBox>
    </Grid>
  );
};

export default TodayTopic;
