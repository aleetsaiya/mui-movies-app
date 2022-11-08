import React from "react";
import { Box } from "@mui/material";
import { useAppTheme } from "../app/hooks";
import { Navbar } from "./UI/Navbar";
import { FadeOutBottom } from "./UI/FadeOutBottom";

export const Header = () => {
  const theme = useAppTheme();
  const pages = ["Home", "TV Shows", "Movies", "My List"];
  const pagesRoute = {
    Home: "/",
    "TV Shows": "tv-shows",
    Movies: "movies",
    "My List": "my-list",
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "70vh",
        backgroundImage: `url("https://image.tmdb.org/t/p/original//y9ekzkPFmWSqUU3Kj0wHmYUM8qu.jpg")`,
        backgroundRepeat: "no",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Navbar pages={pages} pagesRoute={pagesRoute} />
      <FadeOutBottom
        height="40vh"
        background={theme.palette.background.default}
      />
    </Box>
  );
};
