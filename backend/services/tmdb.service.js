import axios from 'axios'
import { ENV_VARS } from '../config/envVars'
// fetch(
//   'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))

export const fetchFormTMBD = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY,
    },
  }

  const response = axios.get(url, options)
  if (response.data !== 200) {
    throw new Error('Filed to fetch data from TMDB' + response.statusText)
  }
  return response.data
}
