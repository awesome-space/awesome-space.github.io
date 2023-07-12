"use client";

import { EditorContent, Editor } from "@tiptap/react";
import { useEffect } from "react";
import "github-markdown-css";

/***
 * 菜单栏
 */
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const menus = [
    {
      onClick: () => editor.chain().focus().toggleCode().run(),
      disabled: !editor.can().chain().focus().toggleCode().run(),
      className: editor.isActive("code") ? "is-active" : "",
      label: "标记为代码",
    },
    {
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      className: editor.isActive("codeBlock") ? "is-active" : "",
      label: "代码块",
    },
    {
      onClick: () => editor.chain().focus().unsetAllMarks().run(),
      label: "清除格式",
    },
    {
      onClick: () => editor.chain().focus().undo().run(),
      label: "撤销",
    },
    {
      onClick: () => editor.chain().focus().redo().run(),
      label: "重做",
    },
  ];

  return (
    <>
      {menus.map((item, index) => {
        return (
          <button
            {...item}
            className={`${item.className}`}
            key={"menu_" + index}
          >
            {item.label}
          </button>
        );
      })}
    </>
  );
};

const Tiptap = ({ editor }: { editor: Editor }) => {
  return (
    <div className="px-8">
      <MenuBar editor={editor} /> <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
