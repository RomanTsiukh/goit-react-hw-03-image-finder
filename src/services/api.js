import axios from 'axios';

const API_KEY = '28337578-4a6faed3a9785284bd8e8ad21';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (nameImage, page) => {
  try {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: nameImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    });

    const response = (await axios.get(`?${searchParams}`)).data;

    if (response.totalHits === 0) {
      return 'Sorry, there are no images matching your search query. Please try again.';
    } else if (response.hits.length % 12 !== 0 && response.totalHits > 0) {
      return "We're sorry, but you've reached the end of search results.";
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
