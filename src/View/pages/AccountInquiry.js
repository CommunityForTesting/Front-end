import React from "react";
import { Grid, Box } from "@material-ui/core";
import PageFrame from "View/component/PageFrame";

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

  return <PageFrame></PageFrame>;
}

export default AccountInquiry;
