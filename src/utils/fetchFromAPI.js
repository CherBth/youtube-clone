import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const options = {
    params: { maxResults: 50 },
    headers: {
      'X-RapidAPI-Key':"7f1792ad98msh52aa1840092f20bp16ab28jsn50969a157b13",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error; // Ou retournez un fallback (ex: `return { items: [] }`)
  }
};