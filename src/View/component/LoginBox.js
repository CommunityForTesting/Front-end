import { React, useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function LoginBox(props) {
  const [result, setResult] = useState(false);
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [url, setUrl] = useState("./login");
  const [autoLogin, setAutoLogin] = useState(false);

  useEffect(() => {
    if (id == "sini3181" && pw == "1234") {
      setResult(true);
      setUrl("./");
    } else {
      setResult(false);
      setUrl("?result=failed");
    }
  }, [id, pw, url]);
  return (
    <Grid className="login-box">
      <div style={{ fontSize: "2rem" }}>로그인</div>
      <TextField
        label="이메일 주소"
        variant="outlined"
        className="id-input"
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></TextField>
      <TextField
        label="비밀번호"
        className="pw-input"
        variant="outlined"
        type="password"
        name="password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
      ></TextField>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "2%",
        }}
      >
        <FormControlLabel
          className="auto-login"
          control={
            <Checkbox
              color="default"
              checked={autoLogin}
              onChange={() => setAutoLogin(!autoLogin)}
            />
          }
          label="로그인 상태 유지하기"
        />
        <Link
          style={{
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1rem",
            color: "#598DDE",
          }}
          to="./pwInquiry"
          className="inquiry-link"
          onClick={() => window.scrollTo(0, 0)}
        >
          비밀번호를 잊으셨나요?
        </Link>
      </div>
      <Button className="login-button">로그인</Button>
      <div className="singup-box">
        <div
          style={{
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1rem",
            color: "rgba(19, 19, 19, 0.7)",
          }}
        >
          하루토론에 처음 오셨군요 이쪽으로 모시겠습니다.
        </div>
        <Link
          to="./signup"
          style={{
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1rem",
            color: "#598DDE",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          회원가입하기
        </Link>
      </div>
    </Grid>
  );
}

export default LoginBox;
