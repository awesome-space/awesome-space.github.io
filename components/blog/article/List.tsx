"use client";
import { Dispatch, useEffect, useRef, useState } from "react";
import Image from "next/image";
import NProgress from "@/utils/nprogress";
import request from "@/utils/request";
import Link from "next/link";
import Card from "@components/Card";

export interface Article {
  id: string;
  cover: string;
  created_at: string;
  description: string;
  title: string;
  updated_at: string;
  view_num: number;
  status: number;
  md_text: string;
}

/**
 * 文章项组件
 * @returns JSX.Element[]
 */
const ArticleItem = ({ itemInfo }: { itemInfo: Article }) => {
  return (
    <Card padding={false} shadow={false}>
      <div
        className={
          "flex flex-col gap-4 xl:flex-row rounded-lg shadow-md xl:shadow-none "
        }
      >
        <div className="xl:w-1/3">
          <Link href="/blog/article/[uuid]" as={`/blog/article/${itemInfo.id}`}>
            <Image
              priority={true}
              src={itemInfo.cover}
              width={200}
              height={200}
              className="h-52 w-full object-cover rounded-lg"
              alt="Modern building architecture"
            />
          </Link>
        </div>
        <div className="flex flex-col xl:flex-1 justify-between">
          <h2 className="text-lg font-bold leading-8 tracking-tight">
            <Link
              href="/blog/article/[uuid]"
              as={`/blog/article/${itemInfo.id}`}
            >
              {itemInfo.title}
            </Link>
          </h2>
          <p className="md:p-1 text-sm select-none overflow-ellipsis text-gray-500 overflow-hidden">
            {itemInfo.description?.substring(0, 100)}
          </p>
          <div className="text-sm text-gray-500">
            <span>发布时间：{itemInfo.created_at}</span> {itemInfo.id}
            <span>阅读量：{itemInfo.view_num}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

/**
 * 文章列表组件
 * @returns JSX.Element[]
 */
export default function ArticleList() {
  let articleInfos = useRef(null);
  const [page, setPage] = useState(1);
  const [articleList, setArticleList] = useState([] as Article[]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const lastPage = () => {
    setPage(page - 1 <= 0 ? 1 : page - 1);
  };

  useEffect(() => {
    const flushArticleList = async () => {
      NProgress.start();
      const {
        data: { list = [] },
      } = await request.get(`article/list?page=${page}&limit=10`);
      NProgress.done();
      setArticleList(list);
    };
    flushArticleList();
  }, [page]);

  return (
    articleList.length !== 0 && (
      <>
        {articleList.map((item) => (
          <ArticleItem key={item.id} itemInfo={item} />
        ))}
        <div className="flex justify-between px-4">
          <div
            className="text-md cursor-pointer hover:text-blue-500"
            onClick={lastPage}
          >
            {" "}
            {"<— 上一页"}
          </div>
          <div
            className="text-md cursor-pointer hover:text-blue-500"
            onClick={nextPage}
          >
            {"下一页 —>"}
          </div>
        </div>
      </>
    )
  );
}
