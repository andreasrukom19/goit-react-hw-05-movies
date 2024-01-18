import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ec497105dfd303dd7ac9d9da5a0c4cde';

export const requestTrendListMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const requestMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const requestMovieCredits = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data.cast;
}