import { imageBase64 } from "@utils/request";

/**
 * 图片类型
 */
export const CATEGORIES = [
  "nature",
  "city",
  "technology",
  "food",
  "still_life",
  "abstract",
  "wildlife",
] as const;

type Category = (typeof CATEGORIES)[number];

/**
 * 获取随机图片
 */
export default async (
  category: Category = "nature",
  width: number = 640,
  height: number = 480
) => {
  const res = await imageBase64(
    `https://api.api-ninjas.com/v1/randomimage?category=${category}&width=${width}&height=${height}`,
    {
      headers: { "X-Api-Key": process.env.XApiKey, Accept: "image/jpg" },
    }
  );

  console.log(res);

  return;
};
