import { React, useState, useEffect } from "react";
import { Grid, Box, Icon, Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MessageIcon from "@material-ui/icons/Message";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function TodayTopicBox(props) {
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
    <Grid className="today-topic-info">
      <Box className="versus">{props.todayTopic}</Box>
      <Grid className="today-counts">
        <Grid className="today-comments">
          <div>
            <Icon>
              <MessageIcon />
            </Icon>
          </div>
          <div className="count">{comments}</div>
        </Grid>
        <Grid className="today-likes">
          <div>
            <Icon>
              <ThumbUpIcon />
            </Icon>
          </div>
          <div className="count">{likes}</div>
        </Grid>
        <Grid className="today-points">
          <div>
            <Icon>
              <MonetizationOnIcon />
            </Icon>
          </div>
          <div className="count">{points}</div>
        </Grid>
      </Grid>
      <div className="time">{time}</div>
    </Grid>
  );
}

export default TodayTopicBox;
