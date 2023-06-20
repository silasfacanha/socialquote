import { Container, TextField, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container sx={{ margin: "10%" }}>
      <TextField
        sx={{
          display: "flex",
        }}
        multiline
        rows={4}
        variant="outlined"
        label="Write a post"
        fullWidth
      />
      <Container sx={{ height: "80vh" }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <Typography> Fetched Posts</Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
