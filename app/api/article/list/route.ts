import { NextResponse } from "next/server";
import { connectToDB } from "@utils/databases";
import Article from "@/models/article";
import pool from "@utils/api/db";

/**
 * 获取文章列表
 * @param req HTTP 请求
 * @returns
 */
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) ?? 1;
  const limit = Number(searchParams.get("limit")) ?? 10;

  await connectToDB();
  const total = await Article.count();

  const list = await Article.find()
    .limit(limit)
    .skip((page - 1) * limit);

  return NextResponse.json({
    code: 200,
    data: {
      list,
      total,
    },
  });
};
