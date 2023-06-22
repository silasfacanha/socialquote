import { Toolbar, AppBar, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Container>
          <Typography>
            <Link to="/">Social Quote</Link>
          </Typography>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            <Link to="/myoracula">My Oracula </Link>
          </Typography>
          <Typography>
            <Link to="/friends">Friends</Link>
          </Typography>
          <Typography>
            <Link to="/myprofile">My Profile</Link>
          </Typography>
          <Typography>
            <Link to="/settings">Settings</Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
