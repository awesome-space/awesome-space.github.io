import fetchUtils from "@/utils/request";
import { NextResponse } from "next/server";

const zhihuHot = async () => {
  const { data = [] } = await fetchUtils.get(
    "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=5"
  );

  return data.map((item: any) => {
    const { target: { title, id, type, excerpt } = {} as any, detail_text } =
      item;
    return {
      title,
      id,
      type,
      excerpt,
      url: `https://www.zhihu.com/question/${id}`,
    };
  });
};

const weiboHot = async () => {
  const {
    data: { realtime = [] },
  } = await fetchUtils.get("https://weibo.com/ajax/side/hotSearch");

  return realtime.map((item: any) => {
    const { note: title, word_scheme } = item;
    return {
      title,
      url: `https://s.weibo.com/weibo?q=/${word_scheme}`,
    };
  });
};

/**
 * GET 请求
 */
export const GET = async () => {
  return NextResponse.json({
    code: 200,
    data: [
      {
        type: "zhihu",
        name: "知乎热榜",
        data: await zhihuHot(),
      },
      {
        type: "weibo",
        name: "微博热榜",
        data: await weiboHot(),
      },
    ],
  });
};