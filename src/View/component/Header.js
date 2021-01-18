import { React } from "react";
import { Grid, IconButton, Button } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const Header = () => {
  let loginCheck = false;
  const username = "닉네임";
  const userpoint = "123456";

  return (
    <div className="header">
      <div id="test"></div>
      <Grid className="container">
        <Button className="home">
          <Link to="./">하루토론</Link>
        </Button>
        <Button className="topic-vote">다음 주제 투표</Button>
        {loginCheck ? (
          <Grid className="user-info">
            <div className="username">{username}</div>
            <Grid className="point">
              <div className="point-text">보유포인트</div>
              <div className="user-point">{`${userpoint} Point`}</div>
            </Grid>
            <IconButton>
              <Link to="./mypage">
                <SettingsIcon />
              </Link>
            </IconButton>
          </Grid>
        ) : (
          <Button className="login">
            <Link to="./login">로그인</Link>
          </Button>
        )}
      </Grid>
    </div>
  );
};

export default Header;
