import React from 'react';
import { Grid, Input, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function LoginBox(){

  return (
    <Grid className="loginbox">
      <Grid className="input-box">
        <Grid>
          <Grid className="id">
            <div className="text">ID</div>
            <Input className="input"></Input>
          </Grid>
          <Grid className="pw">
            <div className="text">PW</div>
            <Input className="input"></Input>
          </Grid>
        </Grid>
        <Button className="login-button">로그인</Button>
      </Grid>
      <Grid className="inquiry">
      <Button><Link to="./AccountInquiry" className="inquiry-text">아이디/비밀번호 찾기</Link></Button>
        <div className="inquiry-text">|</div>
        <Button><Link to="./Signup" className="inquiry-text">회원가입</Link></Button>
      </Grid>
    </Grid>
  );
};

export default LoginBox;