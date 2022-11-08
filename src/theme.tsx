import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export const theme = createTheme({
  typography: {
    fontFamily: ["Hind", "Roboto", "Arial", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
  },
});

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
