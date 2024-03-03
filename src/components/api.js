import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;
const PIXABAY_API_KEY = '38153800-29c65605892730b6f027a7070';

export async function fetchImages(query, pageNumber = 1) {
  const response = await axios.get(
    `?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=12`
  );
  return response.data;
}
