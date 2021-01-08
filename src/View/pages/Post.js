import React from "react";
import { Grid } from "@material-ui/core";
import Header from "View/component/Header";
import Container from "View/component/Container";
import PostBox from "View/component/PostBox";
import queryString from "query-string";

function Post({ location }) {
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
  const commentBoxArray = sorted_comment.map((e) => (
    <PostBox key={e.id} title={e.content}></PostBox>
  ));

  return (
    <Grid>
      <Header></Header>
      <Container>
        <Grid>
          <Grid>
            <div>{post.title}</div>
            <div>{post.updateTime ? post.update_date : post.create_date}</div>
          </Grid>
          <div>{post.content}</div>
        </Grid>
        <Grid>{commentBoxArray}</Grid>
      </Container>
    </Grid>
  );
}

export default Post;
