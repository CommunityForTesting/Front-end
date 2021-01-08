import React from "react";
import { Grid } from "@material-ui/core";

function SearchBox(props) {
  const searchInput = props.input;

  return (
    <Grid className="search-result">
      {searchInput ? (
        <Grid className="search-string">{`"${searchInput}"`}</Grid>
      ) : (
        <Grid className="search-string">{`""`}</Grid>
      )}
      <Grid className="result-string">검색결과</Grid>
    </Grid>
  );
}

export default SearchBox;
