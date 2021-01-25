import React, { useState } from "react";
import PageFrame from "View/component/PageFrame";
import { Grid, ButtonBase, Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MessageIcon from "@material-ui/icons/Message";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PostBox from "View/component/PostBox";

const TopicBox = (props) => {
  return (
    <div className="topics-box">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          color: "rgba(19, 19, 19, 0.7)",
        }}
      >
        <div>{props.time}</div>
        <div
          style={{
            marginLeft: "auto",
            color: "#155ED1",
          }}
        >
          전체 게시글 보기
        </div>
      </div>
      <div className="topics-info">
        <div className="field">
          <div className="field-winner"></div>
          <div className="field-title">{props.left}</div>
          <div className="field-likes">{props.leftLikes}</div>
        </div>
        <div className="field">
          <svg className="field-loser">
            <circle cx="0.5em" cy="0.5em" r="0.3em" opacity="0.3" />
          </svg>
          <div className="field-title">{props.right}</div>
          <div className="field-likes">{props.leftLikes}</div>
        </div>
        <div className="counts" style={{ marginLeft: "auto" }}>
          <ThumbUpIcon
            style={{
              marginRight: "6px",
              marginTop: "4px",
            }}
          />
          <div>{props.likes}</div>
        </div>
        <div className="counts">
          <MessageIcon
            style={{
              marginRight: "6px",
              marginTop: "4px",
            }}
          />
          <div>{props.comments}</div>
        </div>
      </div>
      <PostBox></PostBox>
      <PostBox></PostBox>
    </div>
  );
};

function Topics() {
  const [sortBy, setSortBy] = useState("Update");
  const [pageNumber, setPageNumber] = useState(1);

  let pageNumberArr = [];
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
  return (
    <PageFrame>
      <Grid className="topics-container">
        <div
          style={{
            fontFamily: "NotoSansKR-Bold",
            fontSize: "2rem",
          }}
        >
          이전 주제
        </div>
        <div className="topics-option-box">
          <ButtonBase
            className={sortBy === "Best" ? "selected-sort" : "select-sort"}
            onClick={() => {
              setSortBy("Best");
            }}
          >
            인기순
          </ButtonBase>
          <ButtonBase
            className={sortBy === "Comment" ? "selected-sort" : "select-sort"}
            onClick={() => {
              setSortBy("Comment");
            }}
          >
            댓글순
          </ButtonBase>
          <ButtonBase
            className={sortBy === "Update" ? "selected-sort" : "select-sort"}
            onClick={() => {
              setSortBy("Update");
            }}
          >
            최신순
          </ButtonBase>
          <div className="topics-search">검색창</div>
        </div>
      </Grid>
      <Grid className="topics-box-container">
        <TopicBox
          time="2021-01-11"
          left="갤럭시"
          leftLikes="192,222"
          right="아이폰"
          rightLikes="6,222"
          likes="200,000"
          comments="1,200"
        ></TopicBox>
        <TopicBox
          time="2021-01-11"
          left="갤럭시"
          leftLikes="192,222"
          right="아이폰"
          rightLikes="6,222"
          likes="200,000"
          comments="1,200"
        ></TopicBox>
        <div className="page-button-box">{pageNumberArr}</div>
      </Grid>
    </PageFrame>
  );
}

export default Topics;
