import React from "react";
import PageFrame from "View/component/PageFrame";
import TodayTopicCom from "View/component/TodayTopicCom";
import PopularLastTopic from "View/component/PopularLastTopic";

const Home = ({ history }) => {
  const todayTopic = "아이폰 VS 갤럭시";
  return (
    <PageFrame>
      <TodayTopicCom history={history}></TodayTopicCom>
      <PopularLastTopic></PopularLastTopic>
    </PageFrame>
  );
};

export default Home;
