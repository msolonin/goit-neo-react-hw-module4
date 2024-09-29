import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
const API_KEY = '8a9gK7QpH7cD7sFOQ6xlR5E0636ayfWnARQu3KGqUcw';

export const fetchPhotos  = async (query, page = 1, itemPerPage = 10) => {
  const searchParams = {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: itemPerPage,
      orientation: 'landscape',
    },
  };
  try {
    const response = await axios.get('/search/photos', searchParams);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
