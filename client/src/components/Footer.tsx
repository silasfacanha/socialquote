import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "100px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Typography> Help </Typography>
        <Typography> Contact </Typography>
        <Typography> About </Typography>
        <Typography> Terms </Typography>
        <Typography> Privacy </Typography>
      </Container>
    </Box>
  );
};
