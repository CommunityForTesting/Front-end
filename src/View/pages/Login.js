import React from 'react';
import { Grid } from '@material-ui/core';
import Container from 'View/component/Container';
import LoginBox from 'View/component/LoginBox';
import Header from 'View/component/Header';

function Login(){
  return (
      <Grid>
          <Header></Header>
          <Container>
              <div className="login-title">
                  로그인
              </div>
              <LoginBox></LoginBox>
          </Container>
      </Grid>
    );
};

export default Login;