import axios from "axios";
export const fetchMovieData = async (name, page) => {
  let url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=563bb6a7`;
  const {
    data: { Search },
  } = await axios.get(url);
  return Search;
};
