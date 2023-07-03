const fetchUtils = {
  async get(url: string, headers = {}) {
    try {
      const response = await fetch(`/api/${url}`, {
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
