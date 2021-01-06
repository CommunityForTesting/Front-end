import React from 'react';
import { Grid, Input, Button, Select, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

function SignupBox(){
  const MainInput = <Input className="e-mail-com"></Input>;

  return (
    <Grid className="signup-box">
        <Input className="signup-input"></Input>
        <Input className="signup-input"></Input>
        <Input className="signup-input"></Input>
        <Input className="signup-input"></Input>
        <Grid className="e-mail">
            <Input className="e-mail-user"></Input>
            <Select className="e-mail-com">
              <MenuItem value="naver.com">naver.com</MenuItem>
              <MenuItem value="gmail.com">gmail.com</MenuItem>
              <MenuItem value="hanmail.com">hanmail.com</MenuItem>
              <MenuItem value={MainInput}>직접입력</MenuItem>
            </Select>
        </Grid>
      <Button className="signup-button">인증 메일 보내기</Button>
    </Grid>
  );
};

export default SignupBox;