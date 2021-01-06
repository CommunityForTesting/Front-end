import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'View/component/Header';
import Container from 'View/component/Container';
import SignupBox from 'View/component/SignupBox';

function Signup(){
  return (
    <Grid>
        <Header></Header>
        <Container>
          <div className="signup-title">
            회원가입
          </div>
          <SignupBox></SignupBox>
        </Container>
    </Grid>
  );
};

export default Signup;