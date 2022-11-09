import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header";
import { CustomThemeProvider } from "./theme";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { MovieDetail } from "./components/MovieDetail";

const App = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="home" element={<Main />}>
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CustomThemeProvider>
  );
};

export default App;
