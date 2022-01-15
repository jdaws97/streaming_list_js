import axios, { AxiosResponse } from "axios";

const apiKey: string = "393cb43ef6936fb7871be790b9a81078";

export const createSession = async (query) => {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`,
    timeout: 10000,
  });
  const baseURLS = {
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`,
  };
  const response = (response) => response.data;
  const requests = await axios.get(baseURLS.baseURL).then(response);
  //  streamingProviderURL: `https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=393cb43ef6936fb7871be790b9a81078`,

  return await requests;
};
