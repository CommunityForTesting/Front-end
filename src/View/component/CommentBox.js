import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Grid, ButtonBase, Button, TextField } from "@material-ui/core";

const CommentBox = (props) => {
  return (
    <div className="comment">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "1%",
          marginTop: "2%",
        }}
      >
        <div>익명1231</div>
        <div
          style={{
            marginLeft: "2%",
            color: "rgba(19, 19, 19, 0.7)",
          }}
        >
          3 시간 전
        </div>
      </div>
      <div
        style={{
          fontSize: "1.2rem",
        }}
      >
        지구인이면 아이폰 쓰자
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "45%",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThumbUpIcon
            style={{
              marginRight: "8%",
            }}
          ></ThumbUpIcon>
          <div>166</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThumbDownIcon
            style={{
              marginRight: "15%",
              alignSelf: "flex-end",
            }}
          />
          <div>2</div>
        </div>
        <Button className="comment-button">답글 작성하기</Button>
        <Button className="comment-button-more">
          <ExpandMoreIcon />
          답글 3개 보기
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
