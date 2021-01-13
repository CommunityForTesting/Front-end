import React from "react";
import { Grid, Box } from "@material-ui/core";
import Header from "View/component/Header";
import Container from "View/component/Container";

function AccountInquiry() {
  const BoxArr = [];
  for (let i = 0; i < 8; i += 1) {
    BoxArr.push(
      <Box
        className="test-box"
        style={{
          animationDelay: `${i}s`,
        }}
        key={i}
      >
        <span className="animation-span">""</span>
      </Box>
    );
  }

  return (
    <Grid>
      <Header></Header>
      <Grid className="test-container">
        <Box className="for-test">
          {BoxArr}
          <Box className="test-button">
            <span className="button-span">토론 참여하기</span>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AccountInquiry;
