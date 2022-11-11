import React from "react";
import { Box } from "@mui/material";
import {
  useDiscoverQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../services/moviesApi";
import { MovieList } from "./MovieList";
import { Header } from "./Header";

export const Home = () => {
  const { data: movies } = useGetTrendingQuery("movie");
  const { data: topRatedMovies } = useGetTopRatedQuery();
  const { data: animtaions } = useDiscoverQuery("Animation");
  const { data: fantasyMovies } = useDiscoverQuery("Fantasy");
  const { data: warMovies } = useDiscoverQuery("War");

  return (
    <>
      <Header showedMovie={movies?.results[0]} showInfo />
      <Box
        m={4}
        pl={{
          xs: 2,
          md: 6,
        }}
        pb={{
          xs: 0,
          md: 4,
        }}
        sx={{
          overflow: "hidden",
        }}
      >
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
        <MovieList
          movies={warMovies?.results ?? []}
          title="War"
          sx={{
            marginTop: "60px",
          }}
        />
      </Box>
    </>
  );
};
