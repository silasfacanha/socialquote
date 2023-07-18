import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import MyOraculaContainer from "../components/ui/MyOracula/MyOraculaContainer";

const MyOracula = () => {
  return (
    <MyOraculaContainer>
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
    </MyOraculaContainer>
  );
};

export default MyOracula;
