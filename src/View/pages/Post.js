import React, { useState } from "react";
import { Grid, ButtonBase, Button, TextField } from "@material-ui/core";
import PageFrame from "View/component/PageFrame";
import queryString from "query-string";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const PostBox = (props) => {
  return (
    <div className="other-post">
      <div className="other-post-field">{props.field}</div>
      <div className="other-post-title">{props.title}</div>
      <div className="other-post-comment">{`[${props.comment_count}]`}</div>
      <div className="other-post-icon">
        <ThumbUpIcon />
      </div>
      <div className="other-post-likes">{props.likes}</div>
      <div className="other-post-time">{props.time}</div>
    </div>
  );
};

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

function Post({ location }) {
  const [sortBy, setSortBy] = useState("Update");
  const query = queryString.parse(location);
  //ViewModel에서 props로 전달 할 예정.
  const request_post = (post_id) => {
    return {
      create_date: "2021/01/08 13:25:21",
      update_date: "2021/01/08 13:25:21", // update_date로 글 수정 여부 확인.
      user_id: "4252131", // 익명 기능을 위해서 user_id는 Hash를 실행한 결과를 받는다.
      title: "Title",
      content: "content",
      view_count: "123",
      good: "12",
      bad: "2",
      topic_id: "15123",
      comment_count: "5",
    };
  };

  const request_comment = (post_id) => {
    return [
      {
        id: "1",
        user_id: "1324523",
        create_date: "2021/01/08 13:28:21",
        content: "content0",
        pcomment_id: "", //pcomment_id가 존재하면 해당 댓글의 답글, create_date와 pcommnet_id를 사용해서 댓글을 정렬.
      },
      {
        id: "2",
        user_id: "1324123",
        create_date: "2021/01/08 13:29:21",
        content: "content1",
        pcomment_id: "",
      },
      {
        id: "3",
        user_id: "1324523",
        create_date: "2021/01/08 13:31:21",
        content: "content2",
        pcomment_id: "",
      },
      {
        id: "4",
        user_id: "1324523",
        create_date: "2021/01/08 13:32:21",
        content: "content3",
        pcomment_id: "1",
      },
      {
        id: "5",
        user_id: "5241322",
        create_date: "2021/01/08 13:32:20",
        content: "content4",
        pcomment_id: "1",
      },
    ];
  };

  const sort_comment = (comment) => {
    let comments = [];
    let reply = [];
    comment.map((e) => {
      e.pcomment_id == "" ? comments.push(e) : reply.push(e);
    });
    comments.sort((next, prev) => {
      return next.create_date < prev.create_date ? -1 : 1;
    });

    reply.map((i) => {
      const index = comment.findIndex((e) => (e.id = i.pcomment_id));
      comments.splice(index + 1, 0, i);
    });
    comments.sort((next, prev) => {
      if (next.pcomment_id === prev.pcomment_id) {
        return next.create_date < prev.create_date ? -1 : 1;
      } else {
        return 0;
      }
    });
    return comments;
  };

  const post = request_post(query.post_id);
  const comment = request_comment(query.post_id);
  const sorted_comment = sort_comment(comment);
  /*const commentBoxArray = sorted_comment.map((e) => (
    <PopularPostBox key={e.id} title={e.content}></PopularPostBox>
  ));*/

  return (
    <PageFrame>
      <Grid className="post-box">
        <div className="post-box-info">
          <div>진영</div>
          <div className="post-box-count" style={{ marginLeft: "auto" }}>
            <ThumbUpIcon style={{ marginRight: "5%" }} />
            <div>12,222</div>
          </div>
          <div className="post-box-count">
            <VisibilityIcon style={{ marginRight: "5%" }} />
            <div>9,999</div>
          </div>
          <div style={{ marginRight: "3%" }}>3 시간 전</div>
        </div>
        <div className="post-box-title">
          <div>Title</div>
          <div className="post-box-comments">[135]</div>
        </div>
        <div className="post-box-divider"></div>
        <div className="contents-box"></div>
        <div className="button-wrapper">
          <Button className={"selected-button"}>
            <div>좋아요 수</div>
          </Button>
          <Button className={"default-button"} style={{ marginLeft: "3%" }}>
            <div>싫어요 수</div>
          </Button>
        </div>
      </Grid>
      <Grid className="comment-option">
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
      </Grid>
      <Grid className="comment-box-wrapper">
        <div className="comment-input">
          <div className="comment-input-id"> 아이디 </div>
          <TextField
            variant="outlined"
            className="comment-input-box"
            label="댓글 작성하기"
          ></TextField>
          <Button className="comment-input-button">등록</Button>
        </div>
        <div className="comment-box">
          <CommentBox></CommentBox>
          <CommentBox></CommentBox>
          <CommentBox></CommentBox>
          <Button className="comment-add-button">댓글 더 보기</Button>
        </div>
      </Grid>
      <Grid className="post-box-wrapper">
        <PostBox
          field="아이폰"
          title="아이폰이면 지구인 쓰자"
          comment_count="136"
          likes="12,222"
          time="3 시간 전"
        ></PostBox>
        <PostBox
          field="갤럭시"
          title="한국인이면 갤럭시 쓰자"
          comment_count="136"
          likes="12,222"
          time="3 시간 전"
        ></PostBox>
        <Button className="other-post-button">게시글 더 보기</Button>
      </Grid>
    </PageFrame>
  );
}

export default Post;
