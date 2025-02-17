// src/utils/api.ts
import axios from 'axios';

const API_URL = 'https://api.openbrewerydb.org/breweries';

export const fetchBreweries = async (search: string = '', page: number = 1, perPage: number = 10) => {
  const response = await axios.get(API_URL, {
    params: {
      by_name: search,
      page,
      per_page: perPage,
    },
  });
  return response.data;
};

export const fetchBreweryDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
