import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const MyOracula = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography> Here are your Oracula!</Typography>
        <Typography> User Oracula</Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography> Here are your Quotes!</Typography>
        <Typography> User Quotes</Typography>
      </Paper>
    </Container>
  );
};

export default MyOracula;
