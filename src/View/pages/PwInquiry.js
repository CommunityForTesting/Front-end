import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import PageFrame from "View/component/PageFrame";

function PwInquiry() {
  return (
    <PageFrame>
      <Grid className="inquiry-box">
        <div style={{ fontSize: "1.5rem", fontFamily: "NotoSansKR-Bold" }}>
          비밀번호 찾기
        </div>
        <div style={{ fontSize: "1rem", marginTop: "5%" }}>
          비밀번호를 찾고자 하는 이메일 주소를 입력해주세요.
        </div>
        <TextField
          label="이메일 주소"
          variant="outlined"
          style={{ width: "100%", marginTop: "3%" }}
        ></TextField>
        <Button
          style={{
            width: "30%",
            height: "6vh",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "white",
            marginLeft: "auto",
            marginTop: "2%",
          }}
        >
          인증코드받기
        </Button>
        <div style={{ fontSize: "1rem", marginTop: "10%" }}>
          이메일 주소로 전송받은 6자리 인증코드를 입력해주세요.
        </div>
        <TextField
          label="인증코드"
          variant="outlined"
          style={{ width: "100%", marginTop: "3%" }}
        ></TextField>
        <Button
          style={{
            width: "20%",
            height: "6vh",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "white",
            marginLeft: "auto",
            marginTop: "2%",
            marginBottom: "30%",
          }}
        >
          확인
        </Button>
      </Grid>
    </PageFrame>
  );
}

export default PwInquiry;
