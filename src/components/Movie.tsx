import React from "react";
import { Basic } from "../types/movies";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Backdrop = ({ darken }: { darken: boolean }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        background: darken ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
        transition: "all ease 0.5s",
      }}
    ></Box>
  );
};

export const Movie = ({
  movie,
  darken,
  imgType,
  onMouseEnter,
  onMouseLeave,
}: {
  movie: Basic;
  darken: boolean;
  imgType: "Poster" | "Rectangle";
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  let imgSrc;
  if (imgType === "Poster")
    imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  else if (imgType === "Rectangle")
    imgSrc = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  const handleClick = () => {
    const currentPath = location.pathname;
    navigate(currentPath.concat(`/${movie.id}`));
  };

  return (
    <Box
      sx={{
        minWidth: "320px",
        position: "relative",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all ease 0.5s",
        "&:hover": {
          transform: "scale(1.2)",
          zIndex: "999",
        },
      }}
      mr={3}
      onClick={handleClick}
      onMouseEnter={() => onMouseEnter(movie.id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <Backdrop darken={darken} />
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
