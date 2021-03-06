import axios from 'axios';
const apiKey = 'zZxRc8rGU85QuAgxPABLKNqbGZi9xk6p';
const BASE_URL = 'http://api.giphy.com/v1/gifs';

const fetchGif = async () => {
  try {
    const resp = await axios(`${BASE_URL}/search?q=ryan+gosling&api_key=${apiKey}`)
    return resp.data.data;
  } catch(error) {
    console.log('not working', error);
    return [];
  }
}

const userSearch = async (newGif) => {
  try {
    const resp = await axios(`${BASE_URL}/search?q=${newGif}&api_key=${apiKey}&limit=1`)
    return resp.data.data;
  } catch(error) {
    console.log('not working', error);
    return [];
  }
}

export {
  fetchGif,
  userSearch
}
