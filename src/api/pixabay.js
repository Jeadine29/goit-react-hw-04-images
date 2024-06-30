import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40349690-1733ca14f63c11d59cbaf9c83';

export async function fetchImages(query, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 40,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${params}`);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}