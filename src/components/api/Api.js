const API_KEY = "7ca49bfd867902aeca15e0a3d83c683e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const searchResults = async (query, type) => {
  try {
    const response = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("error");
  }
};

export const fetchDataFromAPI = async (platform, type) => {
  try {
    const response = await fetch(`${BASE_URL}/${platform}/${type}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
  }
};

export const imgURL = (path) => {
  return `${IMAGE_BASE_URL}${path}`;
};

export const dataDetails = async (id, type) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
