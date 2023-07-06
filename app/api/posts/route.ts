import { connectToDB } from "@utils/databases";

import { NextResponse } from "next/server";

export const GET = async () => {
  await connectToDB();
  return NextResponse.json({
    code: 200,
    data: [],
  });
};
