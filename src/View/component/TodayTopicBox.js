import { React, useState, useEffect } from "react";
import { Grid, Box, Icon, Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MessageIcon from "@material-ui/icons/Message";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function TodayTopicBox(props) {
  const AnimationBoxArr = [];
  for (let i = 0; i < 8; i += 1) {
    AnimationBoxArr.push(
      <Box
        className="animation-box"
        style={{
          animationDelay: `${i}s`,
        }}
        key={i}
      ></Box>
    );
  }

  const comments = 121;
  const likes = 423;
  const points = "235,231";
  const tmpTime = new Date().toLocaleTimeString().slice(2);
  const [time, setTime] = useState(tmpTime);

  const countTime = () => {
    const tmpTime = new Date().toLocaleTimeString().slice(2);
    setTime(tmpTime);
  };

  useEffect(() => {
    setInterval(countTime, 1000);
  }, [time]);

  return (
    <Grid className="today-topic-container">
      <Box className="today-topic-box">
        {AnimationBoxArr}
        <Box className="today-topic-button">
          <Button className="today-topic-span">토론 참여하기</Button>
        </Box>
      </Box>
      <Grid className="today-topic-info">
        <Grid className="field-box-left">
          <Box className="field-title">갤럭시</Box>
          <Box className="field-post">게시글 수 : 999개</Box>
          <Box className="field-likes">좋아요 : 123,345개</Box>
          {props.popularPost}
        </Grid>
        <Grid className="field-box-right">
          <Box className="field-title">아이폰</Box>
          <Box className="field-post">게시글 수 : 999개</Box>
          <Box className="field-likes">좋아요 : 123,345개</Box>
          {props.popularPost}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TodayTopicBox;
