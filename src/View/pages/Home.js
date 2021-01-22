import React from "react";
import PageFrame from "View/component/PageFrame";
import TodayTopicCom from "View/component/TodayTopicCom";
import PopularLastTopic from "View/component/PopularLastTopic";

const Home = ({ history }) => {
  return (
    <PageFrame>
      <TodayTopicCom history={history}></TodayTopicCom>
      <PopularLastTopic></PopularLastTopic>
    </PageFrame>
  );
};

export default Home;
