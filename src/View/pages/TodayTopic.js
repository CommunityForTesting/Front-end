import React, { useState, useEffect } from "react";
import PageFrame from "View/component/PageFrame";
import PostContainer from "View/component/PostContainer";
import PostBox from "View/component/PostBox";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import UpFAB from "View/component/UpFAB";

function TodayTopic() {
  const tmpTime = new Date().toLocaleTimeString().slice(2);
  const [time, setTime] = useState(tmpTime);
  const [field, setField] = useState("All");
  const [sortBy, setSortBy] = useState("Best");
  const [pageNumber, setPageNumber] = useState(1);

  const countTime = () => {
    const tmpTime = new Date().toLocaleTimeString().slice(2);
    setTime(tmpTime);
  };
  useEffect(() => {
    setInterval(countTime, 1000);
  });
  let pageNumberArr = [];
  const url = "./todaytopic";
  const makePageNumberButton = (n) => {
    return (
      <Button
        className="page-button"
        key={n}
        onClick={() => {
          setPageNumber(n);
          window.scrollTo(0, 0);
        }}
      >
        {n}
      </Button>
    );
  };

  const makePageNumber = (maxPageNumber) => {
    pageNumberArr = [];
    pageNumberArr.push(
      <Button
        className="page-button"
        key="forward"
        onClick={() => {
          pageNumber < 6 ? setPageNumber(1) : setPageNumber(pageNumber - 5);
          window.scrollTo(0, 0);
        }}
      >
        <ArrowBackIosIcon />
      </Button>
    );
    if (pageNumber + 2 < maxPageNumber) {
      if (pageNumber <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumberArr.push(makePageNumberButton(i));
        }
      } else {
        for (let i = pageNumber - 2; i < pageNumber + 3; i++) {
          pageNumberArr.push(makePageNumberButton(i));
        }
      }
      pageNumberArr.push(
        <Button
          className="page-button"
          key={"..."}
          onClick={() => {
            setPageNumber(1);
          }}
        >
          ...
        </Button>
      );
      pageNumberArr.push(makePageNumberButton(maxPageNumber));
    }
    if (pageNumber + 2 >= maxPageNumber) {
      pageNumberArr.push(makePageNumberButton(1));
      pageNumberArr.push(
        <Button
          className="page-button"
          key={"..."}
          onClick={() => {
            setPageNumber(1);
          }}
        >
          ...
        </Button>
      );
      for (let i = maxPageNumber - 4; i <= maxPageNumber; i++) {
        pageNumberArr.push(makePageNumberButton(i));
      }
    }
    pageNumberArr.push(
      <Button
        className="page-button"
        key="back"
        onClick={() => {
          pageNumber < maxPageNumber - 5
            ? setPageNumber(pageNumber + 5)
            : setPageNumber(maxPageNumber);
          window.scrollTo(0, 0);
        }}
      >
        <ArrowForwardIosIcon />
      </Button>
    );
  };

  makePageNumber(15);
  const leftBarArr = [];
  const rightBarArr = [];
  for (let i = 0; i < 2.1; i += 0.3) {
    leftBarArr.push(
      <div
        className="animation-bar-left"
        style={{
          animationDelay: `${i}s`,
        }}
        key={i}
      ></div>
    );
    rightBarArr.push(
      <div
        className="animation-bar-right"
        style={{
          animationDelay: `${i}s`,
        }}
        key={i}
      ></div>
    );
  }
  const postArr = [];
  for (let i = 0; i < 10; i++) {
    postArr.push(<PostBox key={i}></PostBox>);
  }
  return (
    <PageFrame>
      <div className="today-title-box">
        {leftBarArr}
        {rightBarArr}
        <div className="title-text" style={{ marginRight: 0 }}>
          갤럭시
        </div>
        <div className="left-info">
          <div>게시글 수 : 999개</div>
          <div>좋아요 : 123,345개</div>
        </div>
        <div className="today-topic-time">
          <div
            style={{
              fontFamily: "NotoSansKR-Regular",
              fontSize: "1rem",
            }}
          >
            남은 시간
          </div>
          <div>{time}</div>
        </div>
        <div
          className="right-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div>게시글 수 : 999개</div>
          <div>좋아요 : 123,345개</div>
        </div>
        <div className="title-text" style={{ marginLeft: 0 }}>
          아이폰
        </div>
      </div>
      <PostContainer
        field={field}
        sortBy={sortBy}
        setField={(e) => {
          setField(e);
        }}
        setSortBy={(e) => {
          setSortBy(e);
        }}
      >
        {postArr}
        <div className="page-button-box">{pageNumberArr}</div>
        <Button
          style={{
            width: "120px",
            height: "45px",
            marginLeft: "auto",
            marginRight: "3%",
            marginBottom: "2%",
            backgroundColor: "#598DDE",
            color: "white",
            borderRadius: "25px",
            fontSize: "1rem",
            fontFamily: "NotoSansKR-Regular",
          }}
        >
          게시글 작성하기
        </Button>
        <UpFAB />
      </PostContainer>
    </PageFrame>
  );
}

export default TodayTopic;
