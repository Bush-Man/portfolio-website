import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

const TextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  // Editor configuration object
  const editorConfig = {
    readonly: false,
    toolbarSticky: true,
    toolbarButtonSize: "middle",
    placeholder: "Start writing your blog here...",
    enableDragAndDropFileToEditor: true,
    uploader: {
      insertImageAsBase64URI: true,
    },
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "ul",
      "ol",
      "|",
      "link",
      "image",
      "|",
      "undo",
      "redo",
      "|",
      "align",
      "fontsize",
      "font",
      "brush",
      "paragraph",
    ],
    style: {
      backgroundColor: "#2b303b",
      color: "#d8dee9",
      caretColor: "#d8dee9",
    },
    toolbar: {
      theme: {
        background: "#3b4252",
        color: "#d8dee9",
      },
    },
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
  };

  return (
    <div style={{ width: "99vw", margin: "0 auto" }}>
      <JoditEditor
        ref={editorRef}
        config={editorConfig}
        onBlur={(newContent) => setContent(newContent)} // Set content on blur
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Preview</h3>
        <div>{HTMLReactParser(content)}</div>
      </div>
    </div>
  );
};

export default TextEditor;
