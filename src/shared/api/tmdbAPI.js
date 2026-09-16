import axios from "axios";

const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3", 
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API_KEY}`,
  },
  params: {
    language: "en-US",
  }
});

export const getTrending = async () => {
  const response = await tmdbClient.get("/trending/all/day");
  return response.data;
};

export const getDetails = async (movieId) => {
  const response = await tmdbClient.get(`/movie/${movieId}`);
  return response.data;
};

export const getImageUrl = (imagePath, width = "w200") => {
  if (!imagePath) return "";
  return `https://image.tmdb.org/t/p/${width}${imagePath}`;
};

