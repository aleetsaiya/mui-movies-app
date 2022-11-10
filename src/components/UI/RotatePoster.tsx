import React from "react";
import { Box } from "@mui/material";

export const RotatePoster = ({
  title,
  poster,
  children,
}: {
  title: string;
  poster: string | null;
  children: React.ReactNode;
}) => {
  return (
    <Box
      width="500px"
      height="750px"
      sx={{
        position: "relative",
        transition: "all ease 0.8s",
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
        transitionDelay: "0.2s",
        "&:hover": {
          transform: "rotateY(180deg)",
        },
      }}
    >
      <img
        width="100%"
        height="100%"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        style={{
          position: "absolute",
          borderRadius: "8px",
          backfaceVisibility: "hidden",
        }}
        alt={title}
      />
      <Box
        width="100%"
        height="100%"
        p={4}
        color="#e7e7e7"
        sx={{
          position: "absolute",
          borderRadius: "8px",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
          background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://image.tmdb.org/t/p/w500/${poster})`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
