"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "github-markdown-css";
import { useEffect } from "react";
// https://tiptap.dev/api/utilities/html

const handleKeyDown = (event: any) => {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // prevent the default action (save page dialog)
    console.log("已保存");
    // your logic here...
  }
};

const Tiptap = ({ content }: { content?: string }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose prose-xl mx-auto focus:outline-none",
      },
    },
    extensions: [StarterKit],
    content: content,
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
