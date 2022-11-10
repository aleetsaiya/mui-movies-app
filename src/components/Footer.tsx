import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography, Stack, Link } from "@mui/material";

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        marginTop: "120px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        pt={5}
        pb={5}
      >
        <CopyrightIcon sx={{ fontSize: "20px", marginRight: "8px" }} /> 2022 by
        <Link
          href="https://github.com/aleetsaiya"
          ml={0.5}
          target="_blank"
          rel="noreferrer"
        >
          Alee Tsai
        </Link>
      </Stack>
    </footer>
  );
};
