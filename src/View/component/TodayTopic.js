import { React, useState } from "react";
import TodayTopicBox from "View/component/TodayTopicBox";
import PostBox from "View/component/PostBox";
import { Grid, Box, Icon, Button } from "@material-ui/core";

const TodayTopic = (props) => {
  const [popularPost, setPopularPost] = useState();
  const addPopularPost = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <PostBox
          key={i}
          post_id={i}
          history={props.history}
          title={i}
        ></PostBox>
      );
    }
    setPopularPost(arr);
  };
  return (
    <Grid className="today-topic">
      <Box className="title">오늘의 주제</Box>
      <Button onClick={addPopularPost}>
        <TodayTopicBox
          todayTopic={props.todayTopic}
          popularPost={popularPost}
        ></TodayTopicBox>
      </Button>
      {popularPost ? <Grid>{popularPost}</Grid> : undefined}
    </Grid>
  );
};

export default TodayTopic;
