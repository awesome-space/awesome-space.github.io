import { NextResponse } from "next/server";
import dbPool from "@/utils/api/db";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) ?? 1;
  const limit = Number(searchParams.get("limit")) ?? 10;
  // 从连接池获取连接
  const connection = await dbPool.getConnection();

  const [total] = await connection.execute(
    "SELECT count(id) as count FROM tb_article"
  );

  // 执行 SQL 查询
  const [rows] = await connection.query("SELECT * FROM tb_article limit ?,?", [
    page - 1,
    limit,
  ]);

  return NextResponse.json({
    code: 200,
    data: {
      list: rows,
      total,
    },
  });
};
