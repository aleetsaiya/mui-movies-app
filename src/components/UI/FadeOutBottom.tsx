import React from "react";
import { Box } from "@mui/material";

export const FadeOutBottom = ({
  height,
  background,
}: {
  height: string;
  background: string;
}) => {
  const sx = {
    position: "absolute",
    width: "100%",
    bottom: "0",
    height: height,
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), ${background})`,
  };

  return <Box sx={sx}></Box>;
};
