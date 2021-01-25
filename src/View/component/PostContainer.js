import React from "react";
import { Button, ButtonBase } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function PostContainer(props) {
  let history = useHistory();
  return (
    <div className="today-post-container">
      <div className="option-box">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "NotoSansKR-Bold",
              fontWeight: "bold",
            }}
          >
            갤럭시 VS 아이폰
          </div>
          <Button
            style={{
              width: "120px",
              height: "45px",
              marginLeft: "auto",
              backgroundColor: "#598DDE",
              color: "white",
              borderRadius: "25px",
              fontSize: "1rem",
              fontFamily: "NotoSansKR-Regular",
            }}
            onClick={() => {
              history.push("./postedit");
            }}
          >
            게시글 작성하기
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <ButtonBase
            className={
              props.field === "All" ? "selected-field" : "select-field"
            }
            style={{ borderLeft: "1px solid #dedede" }}
            onClick={() => {
              props.setField("All");
            }}
          >
            전체
          </ButtonBase>
          <ButtonBase
            className={
              props.field === "Left" ? "selected-field" : "select-field"
            }
            onClick={() => {
              props.setField("Left");
            }}
          >
            갤럭시
          </ButtonBase>
          <ButtonBase
            className={
              props.field === "Right" ? "selected-field" : "select-field"
            }
            onClick={() => {
              props.setField("Right");
            }}
          >
            아이폰
          </ButtonBase>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ButtonBase
            className={
              props.sortBy === "Best" ? "selected-sort" : "select-sort"
            }
            onClick={() => {
              props.setSortBy("Best");
            }}
          >
            인기순
          </ButtonBase>
          <ButtonBase
            className={
              props.sortBy === "Comment" ? "selected-sort" : "select-sort"
            }
            onClick={() => {
              props.setSortBy("Comment");
            }}
          >
            댓글순
          </ButtonBase>
          <ButtonBase
            className={
              props.sortBy === "Update" ? "selected-sort" : "select-sort"
            }
            onClick={() => {
              props.setSortBy("Update");
            }}
          >
            최신순
          </ButtonBase>
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            검색창
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default PostContainer;
