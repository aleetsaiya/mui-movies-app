import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, Basic, Genres } from "../types/movies";
import { APIKEY } from "./moviesAPIKey";

interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

const genresMap: {
  [genres in Genres]: number;
} = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  War: 10752,
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getTrending: builder.query<ApiResponse<Movie>, "movie" | "tv">({
      query: (type) => {
        console.log(`Fetch "${type} trending" data`);
        return `/trending/${type}/week?api_key=${APIKEY}`;
      },
    }),
    getTopRated: builder.query<ApiResponse<Basic>, void>({
      query: () => {
        console.log('Fetch "top rated" data');
        return `movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
      },
    }),
    discover: builder.query<ApiResponse<Basic>, Genres>({
      query: (genres) => {
        console.log(`Fetch "${genres}" data`);
        const genresId = genresMap[genres];
        return `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresId}&with_watch_monetization_types=flatrate`;
      },
    }),
  }),
});

export const { useGetTrendingQuery, useDiscoverQuery, useGetTopRatedQuery } =
  moviesApi;
