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

  // await connectToDB();
  // const total = await Article.count();

  // const res = await Article.find()
  //   .limit(limit)
  //   .skip((page - 1) * limit);

  const [total] = await pool.execute(
    "SELECT COUNT(*) as total FROM tb_article"
  );
  const [list] = await pool.query("SELECT * FROM tb_article limit ?,?", [
    (page - 1) * limit,
    limit,
  ]);

  return NextResponse.json({
    code: 200,
    data: {
      list,
      total,
    },
  });
};
