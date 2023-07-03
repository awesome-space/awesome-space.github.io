import { NextResponse } from "next/server";
import dbPool from "@/utils/api/db";

export const GET = async () => {
  // 从连接池获取连接
  const connection = await dbPool.getConnection();
  // 执行 SQL 查询
  const [rows] = await connection.query("SELECT * FROM tb_article limit 1");
  return NextResponse.json({
    code: 200,
    data: rows,
  });
};
