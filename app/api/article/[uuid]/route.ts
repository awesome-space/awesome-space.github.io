import { NextResponse } from "next/server";
import dbPool from "@/utils/api/db";
import { connectToDB } from "@utils/databases";
import Article from "@models/article";
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
  await connectToDB();
  const aritcle = await Article.findById(uuid);
  return NextResponse.json({
    code: 200,
    data: aritcle,
  });
};
