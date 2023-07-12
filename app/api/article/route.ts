import randomImg from "@api/randomImg";
import Article from "@models/article";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { html, title } = await req.json();
    const { imgurl } = await randomImg();
    const article = {
      title: title,
      html: html,
      cover: imgurl,
    };
    await new Article(article).save();
    return NextResponse.json({
      code: 200,
      article,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      code: 500,
      mesage: e,
    });
  }
};
