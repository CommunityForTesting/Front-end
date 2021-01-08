import { React, useState } from "react";
import { Grid, Input, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const Header = () => {
  const [SearchInput, setSearchInput] = useState();
  let loginCheck = false;
  const username = "닉네임";
  const userpoint = "123456";

  return (
    <div className="header">
      <Grid className="container">
        <Button className="home">
          <Link to="./">Title</Link>
        </Button>
        <Grid className="search">
          <Input
            onInput={(e) => {
              e.target.value
                ? setSearchInput("./search?input=" + e.target.value)
                : setSearchInput();
            }}
          ></Input>
          <IconButton>
            <Link to={SearchInput}>
              <SearchIcon />
            </Link>
          </IconButton>
        </Grid>
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
