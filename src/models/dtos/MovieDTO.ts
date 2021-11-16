export interface MoviesDTO {
  page: number
  results: MovieDTO[]
}

export interface MovieDTO {
  id: number
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  title: string
  release_date: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
}