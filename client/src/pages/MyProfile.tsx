import { Box, Typography } from "@mui/material";
import React from "react";

const MyProfile = () => {
  return (
    <Box sx={{ height: "80vh" }}>
      <h1>My Profile</h1>
      <Typography>User Card</Typography>
      <Typography>Oracula</Typography>
      <Typography>Friends</Typography>
      <Typography> Posts</Typography>
    </Box>
  );
};

export default MyProfile;
