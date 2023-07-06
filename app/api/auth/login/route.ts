import { connectToDB } from "@utils/databases";
import { NextResponse } from "next/server";
import User from "@models/user";

export const GET = async () => {
  await connectToDB();
  const userExists = await User.findOne({
    email: "a@b.com",
  });

  !userExists &&
    (await User.create({
      email: "a@b.com",
      password: "123456",
    }));

  return NextResponse.json({ code: 200, userExists });
};
