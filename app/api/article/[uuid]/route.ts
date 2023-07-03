import { NextResponse } from "next/server";
import dbPool from "@/utils/api/db";

/**
 * 
 * @param request HTTP 请求
 * @param params 请求参数
 * @returns
 */
export const GET = async (
  request: Request,
  { params: { uuid } }: { params: { uuid: string } }
) => {
  // 从连接池获取连接
  const connection = await dbPool.getConnection();
  // 执行 SQL 查询
  const [rows, fields]: [any[], any] = await connection.execute(
    "SELECT * FROM tb_article where id = ? limit 1",
    [uuid]
  );
  const [aritcle = {}] = rows;
  return NextResponse.json({
    code: 200,
    data: aritcle,
  });
};
