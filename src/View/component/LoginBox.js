import { React, useState, useEffect } from "react";
import { Grid, Input, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function LoginBox(props) {
  const [result, setResult] = useState(false);
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [url, setUrl] = useState("./login");

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
    <Grid className="loginbox">
      <Grid className="input-box">
        <Grid>
          <Grid className="id">
            <div className="text">ID</div>
            <Input
              className="input"
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></Input>
          </Grid>
          <Grid className="pw">
            <div className="text">PW</div>
            <Input
              className="input"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            ></Input>
          </Grid>
        </Grid>
        <Button className="login-button">
          로그인
        </Button>
      </Grid>
      <Grid className="inquiry">
        <Button>
          <Link to="./AccountInquiry" className="inquiry-text">
            아이디/비밀번호 찾기
          </Link>
        </Button>
        <div className="inquiry-text">|</div>
        <Button>
          <Link to="./Signup" className="inquiry-text">
            회원가입
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginBox;
