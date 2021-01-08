import React from "react";
import Container from "../component/Container";
import Header from "../component/Header";
import { Grid } from "@material-ui/core";
import TodayTopic from "View/component/TodayTopic";
import LastTopic from "View/component/LastTopic";

const Home = ({ history }) => {
  const todayTopic = "아이폰 VS 갤럭시";
  return (
    <Grid>
      <Header></Header>
      <Container>
        <TodayTopic todayTopic={todayTopic} history={history}></TodayTopic>
        <LastTopic></LastTopic>
      </Container>
    </Grid>
  );
};

export default Home;
