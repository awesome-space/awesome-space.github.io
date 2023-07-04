const fetchUtils = {
  async get(url: string, headers = {}) {
    try {
      const BASE_URL = "/api/";
      const reqURL =
        url.startsWith("http://") || url.startsWith("https://")
          ? url
          : `${BASE_URL}/${url}`;
      const response = await fetch(reqURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
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
  },
};

export default fetchUtils;
