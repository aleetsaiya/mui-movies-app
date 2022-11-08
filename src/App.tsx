import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header";
import { CustomThemeProvider } from "./theme";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";

const App = (): JSX.Element => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/tv-shows" element={<Main />} />
        <Route path="/movies" element={<Main />} />
        <Route path="/my-list" element={<Main />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CustomThemeProvider>
  );
};

export default App;
