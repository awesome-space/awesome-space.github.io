"use client";
import MarkdownEditor from "@components/md-editor/MdEditor";
import fetchUtils from "@utils/request";
import { useEffect, useState } from "react";

export default async function ArticleEdit() {
  const [aritcleList, setArticleList] = useState([] as any[]);

  // 获取文章连接
  useEffect(() => {
    const _ = async () => {
      const {
        code,
        data: { list },
      } = await fetchUtils.get("/article/list?page=1&limit=1");
      setArticleList(list);
    };
    _();
  },aritcleList);

  return (
    <div className="flex justify-between w-full h-full">
      <div className="w-32">
        {aritcleList.length}
        <ul>
          {aritcleList.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-full">
        <MarkdownEditor />
      </div>
    </div>
  );
}
