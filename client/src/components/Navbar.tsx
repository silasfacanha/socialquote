import { Toolbar, AppBar, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Container>
          <Typography>
            <a>Social Quote</a>
          </Typography>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            <a>My Oracula </a>
          </Typography>
          <Typography>
            <a>Friends</a>
          </Typography>
          <Typography>
            <a>My Profile</a>
          </Typography>
          <Typography>
            <a>Settings</a>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
