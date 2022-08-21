import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = '28337578-4a6faed3a9785284bd8e8ad21';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (nameImage, page) => {
  setTimeout(() => {});

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
    // console.log(response);

    if (response.totalHits === 0) {
      toast.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    if (response.hits.length % 12 !== 0 && response.totalHits > 0) {
      toast.info('There are no more images');
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};
