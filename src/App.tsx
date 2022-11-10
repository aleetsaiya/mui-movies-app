import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { CustomThemeProvider } from "./theme";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { MovieDetail } from "./components/MovieDetail";

const App = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CustomThemeProvider>
  );
};

export default App;
