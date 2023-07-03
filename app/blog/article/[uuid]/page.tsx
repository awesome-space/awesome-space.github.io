"use client";
import request from "@/utils/request";
import Image from "next/image";
import wechat404 from "@/public/img/wechat-404-.png";
import MdView from "@/components/md-view/MdView";
import { useState, useEffect } from "react";

interface Article {
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

const ArticleView = ({ articleInfo }: { articleInfo: Article }) => {
  return (
    <article className="flex flex-col justify-center mx-auto w-full">
      <h1 className="text-2xl font-bold mb-2">{articleInfo.title}</h1>
      <hr className="my-4" />
      <MdView mdText={articleInfo.md_text}></MdView>
    </article>
  );
};

const ArticleNotFound = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center">
      <Image src={wechat404} width={400} height={400} className="w-lg" alt="" />
    </div>
  );
};

export default function Posts({ params }: { params: { uuid: string } }) {
  const [articleInfo, setArticleInfo] = useState<Article | null>(null);
  useEffect(() => {
    (async () => {
      const {
        code,
        data: articleInfo = null,
      }: { code: number; data: Article | null } = await request.get(
        `article/${params.uuid}`
      );
      setArticleInfo(articleInfo);
    })();
  }, []);

  return articleInfo == null ? (
    <ArticleNotFound />
  ) : (
    <ArticleView articleInfo={articleInfo} />
  );
}
