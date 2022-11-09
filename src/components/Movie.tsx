import React from "react";
import { Basic } from "../types/movies";
import { Box } from "@mui/material";

export const Movie = ({
  movie,
  imgType,
}: {
  movie: Basic;
  imgType: "Poster" | "Rectangle";
}) => {
  let imgSrc;

  if (imgType === "Poster")
    imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  else if (imgType === "Rectangle")
    imgSrc = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <Box
      sx={{ minWidth: "320px", borderRadius: "8px", cursor: "pointer" }}
      mr={2}
    >
      <img
        width="100%"
        src={imgSrc}
        alt={movie.title}
        style={{
          borderRadius: "8px",
        }}
      />
    </Box>
  );
};
