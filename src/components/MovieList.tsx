import React, { useState } from "react";
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

  const handleToNextPage = () => {
    setPage(page + 1);
  };

  const handleToPrevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  return (
    <Box mt={4} sx={{ overflowX: "hidden", ...sx }}>
      <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>

      <Stack direction="row" mt={2} sx={{ position: "relative" }}>
        {page !== 0 && (
          <IconButton
            onClick={handleToPrevPage}
            size="large"
            sx={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.15)",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.35)",
              },
              zIndex: 999,
            }}
          >
            <KeyboardArrowLeftIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton>
        )}
        <Stack
          direction="row"
          sx={{
            overflowX: "visible",
            transform: `translateX(${page * -320 * 5}px)`,
            transition: "all ease-in-out 0.7s",
          }}
        >
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} imgType={imgType} />
          ))}
        </Stack>
        {page * 320 * 5 < movies.length * 320 && (
          <IconButton
            onClick={handleToNextPage}
            size="large"
            sx={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.15)",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.35)",
              },
              zIndex: 999,
            }}
          >
            <KeyboardArrowRightIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};
