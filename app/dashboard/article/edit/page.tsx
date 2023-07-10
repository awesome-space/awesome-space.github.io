"use client";
import MarkdownEditor from "@components/md-editor/MdEditor";
import fetchUtils from "@utils/request";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

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
            setCurrMd(() => item.md_text);
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default function ArticleEdit() {
  const [aritcleList, setArticleList] = useState([] as any[]);
  const [currMd, setCurrMd] = useState({} as any);

  // 获取文章连接
  useEffect(() => {
    const _ = async () => {
      const {
        code,
        data: { list = [] },
      } = await fetchUtils.get("/article/list?page=1&limit=10");
      setArticleList(() => {
        list.length > 0 && setCurrMd(() => list[0]);
        return list;
      });
    };
    _();
  }, []);

  return (
    <div className="flex justify-between w-full h-full">
      <Slider aritcleList={aritcleList} setCurrMd={setCurrMd}></Slider>
      <div className="flex-1 h-full">
        <div>{currMd.title}</div>
        <MarkdownEditor content={currMd.md_text} />
      </div>
    </div>
  );
}
