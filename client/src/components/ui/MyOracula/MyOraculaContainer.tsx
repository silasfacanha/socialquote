import { ReactNode } from "react";
import { Container } from "@mui/material";

const MyOraculaContainer = ({ children }: any) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
};

export default MyOraculaContainer;
