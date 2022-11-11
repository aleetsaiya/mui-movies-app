import React from "react";
import { Basic } from "../types/movies";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  imgType,
  darken,
  onMouseEnter,
  onMouseLeave,
}: {
  movie: Basic;
  imgType: "Poster" | "Rectangle";
  darken: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}) => {
  const navigate = useNavigate();

  let imgSrc;
  if (imgType === "Poster")
    imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  else if (imgType === "Rectangle")
    imgSrc = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  let style: any = {
    minWidth: {
      xs: "160px",
      md: "320px",
    },
    position: "relative",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all ease 0.5s",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
    "&:hover": {
      transform: "scale(1.15) translateY(-15px)",
      zIndex: "999",
    },
  };

  if (imgType === "Poster") {
    style = {
      ...style,
      "&:hover": {
        ...style["&:hover"],
        transform: "scale(1.1) translateY(-20px)",
      },
    };
  }

  return (
    <Box
      sx={style}
      mr={{
        xs: 1.5,
        md: 3,
      }}
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
