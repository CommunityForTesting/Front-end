import React from "react";
import PageFrame from "View/component/PageFrame";
import { Grid } from "@material-ui/core";
import TodayTopic from "View/component/TodayTopic";
import PopularLastTopic from "View/component/PopularLastTopic";

const Home = ({ history }) => {
  const todayTopic = "아이폰 VS 갤럭시";
  return (
    <PageFrame>
      <TodayTopic></TodayTopic>
      <PopularLastTopic></PopularLastTopic>
    </PageFrame>
  );
};

export default Home;
