"use client";
import MarkdownEditor from "@components/md-editor/MdEditor";
import { post } from "@utils/request";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
const Slider = ({
  aritcleList,
  setCurrMd,
}: {
  aritcleList: any[];
  setCurrMd: any;
}) => {
  return (
    <div className="w-60" style={{ background: "rgb(251, 251, 250)" }}>
      文章列表
      <hr />
      {aritcleList.map((item: any) => (
        <div
          className="text-sm bg-slate-300  px-2 py-2 cursor-pointer"
          key={item.id}
          onClick={() => {
            setCurrMd(() => item);
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

/**
 *
 * @returns
 */
export default function ArticleEdit() {
  const [aritcleList, setArticleList] = useState([] as any[]);
  const [currMd, setCurrMd] = useState({} as any);
  const [articleData, setArticleData] = useState({} as any);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: "markdown-body",
      },
    },
    content: "",
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setArticleData((prev: any) => {
        prev["title"] = "不改";
        prev["html"] = html;
        return prev;
      });
    },
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = async (event: any) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      const { res, code } = await post("/article", { body: articleData });
    }
  };

  return (
    <div className="flex justify-between w-full h-full">
      <Slider
        aritcleList={aritcleList}
        setCurrMd={editor?.commands.setContent}
      ></Slider>
      {/* 编辑区域 */}
      <div className="flex-1 h-full">
        <div>{currMd.title}</div>
        <MarkdownEditor editor={editor as Editor} />
      </div>
    </div>
  );
}
