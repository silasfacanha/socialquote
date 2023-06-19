
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Container maxWidth={"xl"}>
      <Navbar />
      <Footer/>
    </Container>
  
  );
}

export default App;
