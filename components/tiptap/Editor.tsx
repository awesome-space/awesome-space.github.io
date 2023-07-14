"use client";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

import {
  EditorContent,
  ReactNodeViewRenderer,
  useEditor,
  Editor,
} from "@tiptap/react";


import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

// load all highlight.js languages
import { lowlight } from "lowlight";
import React from "react";

import CodeBlock from "./CodeBlock";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

import "github-markdown-css";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <button
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      className={editor.isActive("codeBlock") ? "is-active" : ""}
    >
      code block
    </button>
  );
};

export default () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose flex-1",
      },
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlock);
        },
      }).configure({ lowlight }),
    ],
    content: `
        <p>
          That’s a boring paragraph followed by a fenced code block:
        </p>
        <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
        </p>
      `,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
