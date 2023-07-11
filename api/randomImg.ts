import { get } from "@utils/request";
/**
 * 获取随机图片
 */
export default async () => {
  return get(`https://www.dmoe.cc/random.php?return=json`);
};
