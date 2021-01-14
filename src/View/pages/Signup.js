import { React, useEffect, useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import PageFrame from "View/component/PageFrame";

function Signup() {
  const [inputCheck, setInputCheck] = useState(false);
  const [email, setEmail] = useState();
  const [domain, setDomain] = useState("naver.com");
  const [pw, setPw] = useState();

  const domains = [
    { value: "naver.com" },
    { value: "gmail.com" },
    { value: "hanmail.com" },
    { value: "직접입력" },
  ];
  return (
    <PageFrame>
      <div className="signup-title">회원가입</div>
      <Grid className="signup-input">
        <Grid className="email">
          <TextField
            className="email-id"
            label="이메일"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
          <div classname="email-at">@</div>
          {inputCheck ? (
            <TextField
              className="email-domain"
              label="도메인"
              onChange={(e) => {
                setDomain(e.target.value);
              }}
            ></TextField>
          ) : (
            <TextField
              className="email-domain"
              select
              onChange={(e) => {
                e.target.value == "직접입력"
                  ? setInputCheck(true)
                  : setDomain(e.target.value);
              }}
              SelectProps={{
                native: true,
              }}
            >
              {domains.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </TextField>
          )}
        </Grid>
        <TextField className="signup-input-pw" label="비밀번호"></TextField>
        <TextField
          className="signup-input-pwcheck"
          label="비밀번호 확인"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        ></TextField>
        <Button className="signup-button">인증 메일 보내기</Button>
      </Grid>
    </PageFrame>
  );
}

export default Signup;
