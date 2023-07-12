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

/**
 * 删除文章
 * @param request
 * @param param1
 * @returns
 */
export const DELETE = async (
  request: Request,
  { params: { uuid } }: { params: { uuid: string } }
) => {
  try {
    await connectToDB();
    // 删除文章
    const aritcle = await Article.findByIdAndDelete(uuid);
    return NextResponse.json({
      code: 200,
      data: aritcle,
    });
  } catch (e) {
    return NextResponse.json({
      code: 500,
      mesage: e,
    });
  }
};
