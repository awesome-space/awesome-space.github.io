import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("数据库已连接");
    return;
  }
  try {
    if (process.env.MONGODB_URI === undefined) {
      console.log("MONGODB_URI is find undefined 检查 MONGODB_URI 配置");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
      dbName: process.env.MONGODB_DATABASE,
    });
    isConnected = true;
    console.log("数据库连接成功");
  } catch (error) {
    console.log(error);
  }
};
