import React, { useState, useEffect } from "react";
import PageFrame from "View/component/PageFrame";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";

function Comment() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const hashConfig = {
    trigger: "#",
    separator: " ",
  };

  useEffect(() => {
    const test = editorState.getCurrentContent();
    const rawContentState = convertToRaw(test);
    const html_ = draftToHtml(rawContentState, hashConfig);
    console.log(html_);
  }, [editorState]);

  return (
    <PageFrame>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </PageFrame>
  );
}

export default Comment;
