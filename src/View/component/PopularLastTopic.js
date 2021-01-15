import React from "react";
import { Grid } from "@material-ui/core";
import LastTopicBox from "./LastTopicBox";
import PartitionBox from "View/component/PartitionBox";
import { Link } from "react-router-dom";

const LastTopic = () => {
  //Viewmodel에서 처리해 Component Array로 전달할 예정.
  let LTB_Arr = [];
  for (let i = 0; i < 5; i++) {
    LTB_Arr.push(<LastTopicBox key={i}></LastTopicBox>);
  }

  return (
    <Grid className="last-topic">
      <PartitionBox title="인기 이전 주제"></PartitionBox>
      {LTB_Arr}
      <Link className="last-topic-link" style={{ color: "black" }}>
        이전 인기주제 더보기
      </Link>
    </Grid>
  );
};

export default LastTopic;
