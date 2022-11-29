import React, { useRef, useState } from "react";
import { Typography, Stack, Box, IconButton } from "@mui/material";
import { Movie } from "./Movie";
import { Basic } from "../types/movies";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const MovieList = ({
  title,
  movies,
  imgType = "Rectangle",
  sx,
}: {
  title: string;
  movies: Basic[];
  imgType?: "Poster" | "Rectangle";
  sx?: object;
}) => {
  const [page, setPage] = useState(0);
  const [focusMovieId, setFocusMovieId] = useState(-1);
  const nextPageIconRef = useRef<HTMLButtonElement>(null);
  const prevPageIconRef = useRef<HTMLButtonElement>(null);

  const handleToNextPage = () => {
    setPage(page + 1);
  };

  const handleToPrevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const handleMouseEnter = (id: number) => {
    setFocusMovieId(id);
  };

  const handleMouseLeave = () => {
    setFocusMovieId(-1);
  };

  const handleEnterContainer = () => {
    if (nextPageIconRef.current !== null)
      nextPageIconRef.current.style.visibility = "visible";
    if (prevPageIconRef.current !== null)
      prevPageIconRef.current.style.visibility = "visible";
  };

  const handleLeaveContainer = () => {
    if (nextPageIconRef.current !== null)
      nextPageIconRef.current.style.visibility = "hidden";
    if (prevPageIconRef.current !== null)
      prevPageIconRef.current.style.visibility = "hidden";
  };

  return (
    <Box
      mt={4}
      sx={{ ...sx }}
      onMouseEnter={handleEnterContainer}
      onMouseLeave={handleLeaveContainer}
    >
      <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Stack direction="row" mt={2} sx={{ position: "relative" }}>
        <IconButton
          ref={prevPageIconRef}
          onClick={handleToPrevPage}
          size="medium"
          sx={{
            visibility: {
              xs: "visible",
              md: "hidden",
            },
            position: "absolute",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.15)",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.35)",
            },
            zIndex: 998,
          }}
        >
          <KeyboardArrowLeftIcon sx={{ width: "50px", height: "50px" }} />
        </IconButton>
        <Stack
          direction="row"
          sx={{
            overflowX: "visible",
            transform: {
              xs: `translateX(${page * -320 * 1}px)`,
              md: `translateX(${page * -320 * 5}px)`,
            },
            transition: "all ease-in-out 0.5s",
          }}
        >
          {[...movies, ...movies, ...movies].map((movie, index) => (
            <Movie
              key={movie.id.toString() + "-" + index.toString()}
              movie={movie}
              imgType={imgType}
              darken={focusMovieId !== -1 && focusMovieId !== movie.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </Stack>
        <IconButton
          ref={nextPageIconRef}
          onClick={handleToNextPage}
          size="medium"
          sx={{
            visibility: {
              xs: "visible",
              md: "hidden",
            },
            position: "absolute",
            top: "50%",
            right: "-20px",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.15)",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.35)",
            },
            zIndex: 998,
          }}
        >
          <KeyboardArrowRightIcon sx={{ width: "50px", height: "50px" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};
