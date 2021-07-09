import axios from "axios";

export const getHotManga = async () => {
  const HOT_MANGA_URL = "https://kitsu.io/api/edge/trending/manga";

  try {
    const response = await axios.get(HOT_MANGA_URL);
    const { data } = response;
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
