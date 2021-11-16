import api, { endpoint } from "../services/api";

import { MoviesDTO } from "./dtos/MovieDTO";

export function Movie() {
  function getImagePath(path: string) {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${path}`
  }

  function getBackdropPath(path: string) {
    return `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`
  }

  async function getMovies() { 
    try {
      const response = await api.get<MoviesDTO>(endpoint('discover/movie'))

      return {
        data: response.data,
      } 
    } catch (error) {
      return {
        error
      }
    }
  }

  return {
    getImagePath,
    getBackdropPath,
    getMovies
  }
}
