import React from "react";
import PageFrame from "View/component/PageFrame";
import LoginBox from "View/component/LoginBox";
import queryString from "query-string";

function Login({ location, history }) {
  return (
    <PageFrame>
      <div className="login-title">로그인</div>
      <LoginBox></LoginBox>
    </PageFrame>
  );
}

export default Login;
