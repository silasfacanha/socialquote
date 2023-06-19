import { Toolbar, AppBar, Typography } from "@mui/material";

import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Social Quote</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
