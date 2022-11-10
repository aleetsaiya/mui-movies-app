import React from "react";
import { Box, Typography } from "@mui/material";
import { Navbar } from "./UI/Navbar";
import { Basic } from "../types/movies";
import { useAppTheme } from "../app/hooks";

const Info = ({ movie }: { movie: Basic | undefined }) => {
  return (
    <Box display={{ xs: "none", lg: "block" }} mt={25} ml={10} width="40vw">
      <Typography variant="h3" fontSize="4.5rem" fontWeight="bold">
        {movie?.title}
      </Typography>
      <Typography paragraph width="25vw" fontSize="1.2rem" mt={2}>
        {movie?.overview.slice(0, 120).concat(" ...")}
      </Typography>
    </Box>
  );
};

export const Header = ({
  showedMovie,
  showInfo = false,
  children,
}: {
  showedMovie: Basic | undefined;
  showInfo?: boolean;
  children?: React.ReactNode;
}) => {
  const pages = ["Home", "My List"];
  const pagesRoute = {
    Home: "/",
    "My List": "/my-list",
  };

  const theme = useAppTheme();
  const backgroundColor = theme.palette.background.default;

  const bottomShadowBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 42%, ${backgroundColor}),  url("https://image.tmdb.org/t/p/original/${showedMovie?.backdrop_path}")`;
  const leftBottomShadowBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 42%, ${backgroundColor}), linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.2) 35% ,rgba(0, 0, 0, 0) 50%), url("https://image.tmdb.org/t/p/original/${showedMovie?.backdrop_path}")`;

  return (
    <Box
      height={{ xs: "40vh", lg: "70vh" }}
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: showInfo
          ? leftBottomShadowBackground
          : bottomShadowBackground,
        backgroundRepeat: "no",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <Navbar pages={pages} pagesRoute={pagesRoute} />
      {showInfo && <Info movie={showedMovie} />}
      {children}
    </Box>
  );
};
