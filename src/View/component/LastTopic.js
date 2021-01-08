import React from "react";
import { Grid, Box } from "@material-ui/core";
import LastTopicBox from "./LastTopicBox";

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
      <Grid className="prev-topic">
        <Box className="title">인기 지난 주제</Box>
        {returnLastTopicBox()}
        <Box className="add-list">더 보기</Box>
      </Grid>
      <Grid className="prev-topic">
        <Box className="title">다음 주제 투표</Box>
        {returnLastTopicBox()}
        <Box className="add-list">더 보기</Box>
      </Grid>
    </Grid>
  );
};

export default LastTopic;
