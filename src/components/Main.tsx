import React from "react";
import { Box } from "@mui/material";
import {
  useDiscoverQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../services/moviesApi";
import { MovieList } from "./MovieList";

export const Main = () => {
  const { data: movies } = useGetTrendingQuery("movie");
  const { data: tvs } = useGetTrendingQuery("tv");
  const { data: topRatedMovies } = useGetTopRatedQuery();
  const { data: animtaions } = useDiscoverQuery("Animation");
  const { data: fantasyMovies } = useDiscoverQuery("Fantasy");

  return (
    <Box m={4}>
      <MovieList
        movies={movies?.results ?? []}
        title="Trending"
        imgType="Poster"
      />
      <MovieList
        movies={topRatedMovies?.results ?? []}
        title="Top Rated"
        sx={{
          marginTop: "60px",
        }}
      />
      <MovieList
        movies={tvs?.results ?? []}
        title="TV Shows"
        sx={{
          marginTop: "60px",
        }}
      />
      <MovieList
        movies={animtaions?.results ?? []}
        title="Animations"
        sx={{
          marginTop: "60px",
        }}
      />
      <MovieList
        movies={fantasyMovies?.results ?? []}
        title="Fantasy"
        sx={{
          marginTop: "60px",
        }}
      />
    </Box>
  );
};
