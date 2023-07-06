import { NextResponse } from "next/server";
import { connectToDB } from "@utils/databases";
import Article from "@/models/article";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) ?? 1;
  const limit = Number(searchParams.get("limit")) ?? 10;
  await connectToDB();
  const total = await Article.count();
  
  const res = await Article.find()
    .limit(limit)
    .skip((page - 1) * limit);
  return NextResponse.json({
    code: 200,
    data: {
      list: res,
      total,
    },
  });
};
