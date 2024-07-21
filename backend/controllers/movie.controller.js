import { fetchFormTMBD } from '../services/tmdb.service.js'

export async function getTrndingMovie(req, res) {
  try {
    const data = await fetchFormTMBD(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    )
    const randomMovie = data.results(
      Math.floor(amth.random() * data.results?.length)
    )
    res.json({ success: true, content: randomMovie })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}
