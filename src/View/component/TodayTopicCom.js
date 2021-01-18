import React from "react";
import TodayTopicBox from "View/component/TodayTopicBox";
import PopularPostBox from "View/component/PopularPostBox";
import PartitionBox from "View/component/PartitionBox";
import { Grid } from "@material-ui/core";

const TodayTopicCom = (props) => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(
      <PopularPostBox
        key={i}
        post_id={i}
        history={props.history}
        title={i}
      ></PopularPostBox>
    );
  }
  return (
    <Grid className="today-topic">
      <PartitionBox title="오늘의 주제" url="./todaytopic"></PartitionBox>
      <TodayTopicBox
        todayTopic={props.todayTopic}
        popularPost={arr}
        history={props.history}
      ></TodayTopicBox>
    </Grid>
  );
};

export default TodayTopicCom;
