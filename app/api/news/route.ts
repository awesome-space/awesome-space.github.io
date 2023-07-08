import fetchUtils from "@/utils/request";
import { NextResponse } from "next/server";

const zhihuHot = async () => {
  const { data = [] } = await fetchUtils.get(
    "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=5",
    {
      next: {
        revalidate: 0,
      },
    }
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
  } = await fetchUtils.get("https://weibo.com/ajax/side/hotSearch", {
    next: {
      revalidate: 0,
    },
  });

  return realtime.map((item: any) => {
    const { note: title, word_scheme } = item;
    return {
      title,
      url: `https://s.weibo.com/weibo?q=/${word_scheme}`,
    };
  });
};

const newsTypes: { type: string; name: string; callBack: Function }[] = [
  {
    type: "zhihu",
    name: "知乎热榜",
    callBack: zhihuHot,
  },
  {
    type: "weibo",
    name: "微博热榜",
    callBack: weiboHot,
  },
];

/**
 * GET 请求
 */
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const { callBack } = newsTypes.find((item) => item.type === type) ?? {};
  if (callBack) {
    return NextResponse.json({
      code: 200,
      data: await callBack(),
    });
  }
  const res = [];
  for (let item of newsTypes) {
    const { type, name, callBack } = item;
    res.push({
      type,
      name,
      data: await callBack(),
    });
  }
  return NextResponse.json({
    code: 200,
    data: res,
  });
};
