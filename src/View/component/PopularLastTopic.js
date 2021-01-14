import React from "react";
import { Grid, Box } from "@material-ui/core";
import LastTopicBox from "./LastTopicBox";
import PartitionBox from "View/component/PartitionBox";

const LastTopic = () => {
  //Viewmodel에서 처리해 Component Array로 전달할 예정.
  const returnLastTopicBox = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<LastTopicBox key={i} title={i}></LastTopicBox>);
    }
    return arr;
  };

  return (
    <Grid className="last-topic">
      <PartitionBox title="인기 지난 주제"></PartitionBox>
    </Grid>
  );
};

export default LastTopic;
