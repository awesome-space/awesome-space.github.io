"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "github-markdown-css";
import "highlight.js/styles/github.css";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
// https://tiptap.dev/api/utilities/html

const handleKeyDown = (event: any) => {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // prevent the default action (save page dialog)
    console.log("已保存");
    // your logic here...
  }
};

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    extensions: [StarterKit],
    content: "# niahdo",
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
