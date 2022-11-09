import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "../app/hooks";
import { Navbar } from "./UI/Navbar";
import { useGetTrendingQuery } from "../services/moviesApi";
import { Movie } from "../types/movies";

const Info = ({ movie }: { movie: Movie | undefined }) => {
  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      width="50vw"
      height="70vh"
      sx={{
        position: "absolute",
        top: "0vh",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.2) 70% ,rgba(0, 0, 0, 0))`,
      }}
    >
      <Box mt={25} ml={10} width="40vw">
        <Typography variant="h3" fontSize="4.5rem" fontWeight="bold">
          {movie?.title}
        </Typography>
        <Typography paragraph width="25vw" fontSize="1.2rem" mt={2}>
          {movie?.overview.slice(1, 120).concat(" ...")}
        </Typography>
      </Box>
    </Box>
  );
};

const FadeOutBottom = ({ background }: { background: string }) => {
  const sx = {
    position: "absolute",
    width: "100%",
    bottom: "0",
    height: "40vh",
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), ${background})`,
  };
  return <Box sx={sx}></Box>;
};

export const Header = () => {
  const theme = useAppTheme();
  const pages = ["Home", "TV Shows", "Movies", "My List"];
  const pagesRoute = {
    Home: "home",
    "TV Shows": "tv-shows",
    Movies: "movies",
    "My List": "my-list",
  };

  const { data, error, isLoading, isFetching } = useGetTrendingQuery("movie");
  const showedMovie = data?.results[0];

  return (
    <Box
      height={{ xs: "40vh", lg: "70vh" }}
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${showedMovie?.backdrop_path}")`,
        backgroundRepeat: "no",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <FadeOutBottom background={theme.palette.background.default} />
      <Info movie={showedMovie} />
      <Navbar pages={pages} pagesRoute={pagesRoute} />
    </Box>
  );
};
