import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const Auth = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        height: "80vh",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography>Register</Typography>
        <TextField size="small" />
        <TextField size="small" type="password" />
        <Button>Register</Button>
      </Paper>
      <Paper
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography>Login </Typography>
        <TextField size="small" />
        <TextField size="small" type="password" />
        <Button>Login</Button>
      </Paper>
    </Container>
  );
};

export default Auth;
