import React from "react";
import { Grid } from "@material-ui/core";
import Header from "View/component/Header";
import Container from "../component/Container";
import SearchBox from "View/component/SearchBox";
import queryString from "query-string";

function Search(props) {
  const query = queryString.parse(props["location"]["search"]);

  return (
    <Grid>
      <Header></Header>
      <Container>
        <SearchBox input={query.input}></SearchBox>
      </Container>
    </Grid>
  );
}

export default Search;
