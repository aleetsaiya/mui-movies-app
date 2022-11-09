export interface Basic {
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
}

export interface Movie extends Basic {
  media_type: string;
}

export type Genres =
  | "Action"
  | "Adventure"
  | "Animation"
  | "Comedy"
  | "Crime"
  | "Documentary"
  | "Drama"
  | "Family"
  | "Fantasy"
  | "History"
  | "Horror"
  | "Music"
  | "Mystery"
  | "Romance"
  | "Science Fiction"
  | "War";
