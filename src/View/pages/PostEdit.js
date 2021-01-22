import React, { createRef, useState, forwardRef, useEffect } from "react";
import PageFrame from "View/component/PageFrame";
import { Button, Grid, TextField } from "@material-ui/core";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import ReactHTMLConverter from "react-html-converter/node";

const PostEdit = forwardRef(() => {
  const editorRef = createRef();
  const [copy, setCopy] = useState(<p></p>);
  const converter = ReactHTMLConverter;

  let setWidth = false;

  useEffect(() => {
    if (!setWidth) {
      editorRef.current.rootEl.current.style.width = "1000px";
      setWidth = true;
    }
  });

  return (
    <PageFrame>
      <Grid className="postedit-box">
        <div className="postedit-title">글쓰기</div>

        <div className="postedit-field">진영</div>
        <div className="postedit-field-wrapper">
          <Button className="postedit-field-button">갤럭시</Button>
          <Button className="postedit-field-button">아이폰</Button>
        </div>
        <TextField
          label="제목"
          className="postedit-title-input"
          variant="outlined"
        ></TextField>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            zIndex: 0,
            marginBottom: "3%",
          }}
        >
          <Editor
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            hideModeSwitch={true}
            ref={editorRef}
            toolbarItems={[
              "bold",
              "italic",
              "strike",
              "hr",
              "quote",
              "divider",
              "ul",
              "ol",
              "task",
              "image",
              "divider",
              "code",
              "codeblock",
            ]}
          />
        </div>
        <div className="postedit-field-wrapper">
          <Button
            className="postedit-post-button"
            style={{
              width: "60px",
              height: "40px",
              fontFamily: "NotoSansKR-Regular",
              fontSize: "1.1rem",
              background: "white 0% 0% no-repeat padding-box",
              borderRadius: "24px",
              color: "Black",
              border: "1px solid black",
              marginLeft: "auto",
              marginTop: "2%",
            }}
          >
            취소
          </Button>
          <Button
            className="postedit-post-button"
            style={{
              width: "60px",
              height: "40px",
              fontFamily: "NotoSansKR-Regular",
              fontSize: "1.1rem",
              background: "#598DDE 0% 0% no-repeat padding-box",
              borderRadius: "24px",
              color: "white",
              marginLeft: "3%",
              marginTop: "2%",
            }}
          >
            등록
          </Button>
        </div>
      </Grid>
    </PageFrame>
  );
});

export default PostEdit;
