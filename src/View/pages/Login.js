import React from "react";
import PageFrame from "View/component/PageFrame";
import LoginBox from "View/component/LoginBox";
import queryString from "query-string";

function Login({ location, history }) {
  return (
    <PageFrame>
      <LoginBox></LoginBox>
    </PageFrame>
  );
}

export default Login;
