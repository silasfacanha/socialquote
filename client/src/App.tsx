import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Router from "./pages/Router";
import React, { createContext, useState } from "react";

function App() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Router />
      <Footer />
    </Container>
  );
}

export default App;
