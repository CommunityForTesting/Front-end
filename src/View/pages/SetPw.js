import React from "react";
import PageFrame from "View/component/PageFrame";
import { Grid, TextField, Button, Checkbox } from "@material-ui/core";

function SetPw() {
  return (
    <PageFrame>
      <Grid className="set-pw-box">
        <div style={{ fontSize: "1.5rem", fontFamily: "NotoSansKR-Bold" }}>
          비밀번호 재설정
        </div>
        <TextField
          label="비밀번호"
          variant="outlined"
          type="password"
          name="password"
          style={{ width: "100%", marginTop: "12%" }}
        ></TextField>
        <TextField
          label="비밀번호 확인"
          variant="outlined"
          type="password"
          name="password"
          style={{ width: "100%", marginTop: "3%" }}
        ></TextField>
        <div
          style={{
            marginTop: "5%",
            color: "rgba(19, 19, 19, 0.7)",
            fontSize: "1rem",
            fontFamily: "NotoSansKR-Bold",
          }}
        >
          비밀번호 요구사항
        </div>
        <div
          style={{
            marginLeft: "-2%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkbox checked={1} disabled></Checkbox>
          <div
            style={{
              color: "rgba(19, 19, 19, 0.5)",
              fontSize: "1rem",
            }}
          >
            영문, 숫자, 특수문자 중 2개 이상의 조합입니다.
          </div>
        </div>
        <div
          style={{
            marginLeft: "-2%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkbox disabled></Checkbox>
          <div
            style={{
              color: "rgba(19, 19, 19, 0.5)",
              fontSize: "1rem",
            }}
          >
            8~20자입니다.
          </div>
        </div>
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
          완료
        </Button>
      </Grid>
    </PageFrame>
  );
}

export default SetPw;
