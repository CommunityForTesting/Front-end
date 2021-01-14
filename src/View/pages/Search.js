import React from "react";
import PageFrame from "View/component/PageFrame";
import SearchBox from "View/component/SearchBox";
import queryString from "query-string";

function Search(props) {
  const query = queryString.parse(props["location"]["search"]);

  return (
    <PageFrame>
      <SearchBox input={query.input}></SearchBox>
    </PageFrame>
  );
}

export default Search;
