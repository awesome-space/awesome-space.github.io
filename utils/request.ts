const baseFetch = async (
  url: string,
  { headers = {}, next = {}, method = "GET", body = "" } = {}
) => {
  console.log(method);
  
  const BASE_URL = "/api/";
  const reqURL =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `${BASE_URL}${url}`;
  const response = await fetch(reqURL, {
    method,
    headers,
    body,
    next,
  });
  return response;
};

export const get = async (url: string, { headers = {}, next = {} } = {}) => {
  try {
    const response = await baseFetch(url, {
      method: "GET",
      headers,
      next,
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * post 请求
 * @param url
 * @param param1
 */
export const post = async (
  url: string,
  { headers = {}, next = {}, body = {} } = {}
) => {
  try {
    const response = await baseFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
      next,
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * 获取 base64 图片
 * @param url
 * @param param1
 * @returns
 */
export const imageBase64 = async (
  url: string,
  { headers = {}, next = {} } = {}
) => {
  const response = await baseFetch(url, {
    headers,
    next,
  });
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export default {
  get,
};
