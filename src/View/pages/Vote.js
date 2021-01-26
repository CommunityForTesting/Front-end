import React, { useState } from "react";
import PageFrame from "View/component/PageFrame";
import { TextField, Button, ButtonBase, Radio } from "@material-ui/core";
import CommentBox from "View/component/CommentBox";

const Candidate = () => {
  return (
    <div className="vote-candidate">
      <div>갤럭시 vs 갤럭시</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div className="candidate-box">76% 122,303표</div>
        <Radio
          style={{
            marginLeft: "auto",
            marginBottom: "1%",
          }}
        />
      </div>
    </div>
  );
};

function Vote() {
  const [votes, setVotes] = useState(0);
  const [sortBy, setSortBy] = useState("Update");

  return (
    <PageFrame>
      <div className="vote-select">
        <ButtonBase
          className={votes === 0 ? "selected-sort" : "select-sort"}
          onClick={() => {
            setVotes(0);
          }}
        >
          ~2021-01-13
        </ButtonBase>
        <ButtonBase
          className={votes === 1 ? "selected-sort" : "select-sort"}
          onClick={() => {
            setVotes(1);
          }}
        >
          ~2021-01-13
        </ButtonBase>
      </div>
      <div className="next-topic-vote">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ fontFamily: "NotoSansKR-Bold", fontSize: "2rem" }}>
            다음 주제 투표
          </div>
          <div
            style={{
              fontFamily: "NotoSansKR-Bold",
              fontSize: "1.2rem",
              marginLeft: "auto",
            }}
          >
            23:59:59 후 투표 종료
          </div>
        </div>
        <Candidate></Candidate>
        <Candidate></Candidate>
        <Candidate></Candidate>
        <Button
          style={{
            width: "80px",
            height: "45px",
            marginLeft: "auto",
            marginTop: "3%",
            marginBottom: "2%",
            backgroundColor: "#598DDE",
            color: "white",
            borderRadius: "25px",
            fontSize: "1rem",
            fontFamily: "NotoSansKR-Regular",
          }}
        >
          투표하기
        </Button>
      </div>
      <div className="vote-comment-option">
        <div>댓글 136개</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ButtonBase
            className={sortBy === "Best" ? "selected-sort" : "select-sort"}
            onClick={() => {
              setSortBy("Best");
            }}
          >
            인기순
          </ButtonBase>
          <ButtonBase
            className={sortBy === "Update" ? "selected-sort" : "select-sort"}
            onClick={() => {
              setSortBy("Update");
            }}
          >
            최신순
          </ButtonBase>
        </div>
      </div>
      <div className="vote-comment-box">
        <div className="comment-input">
          <div className="comment-input-id"> 아이디 </div>
          <TextField
            variant="outlined"
            className="comment-input-box"
            label="댓글 작성하기"
          ></TextField>
          <Button className="comment-input-button">등록</Button>
        </div>
        <CommentBox></CommentBox>
        <CommentBox></CommentBox>
        <CommentBox></CommentBox>
        <Button className="comment-add-button">댓글 더 보기</Button>
      </div>
    </PageFrame>
  );
}

export default Vote;
