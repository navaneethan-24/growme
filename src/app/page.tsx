import { Box } from "@mui/material";
import Header from "./components/landing-page/Header";
import Contact from "./custmain/Contact";
import Footer from "./components/landing-page/Footer";
import SlideNav from "./components/SlideNav";

export default function Home() {
  return (
    <Box sx={{  minHeight: "100vh" , display:"flex", flexDirection:"column"}}>
      {/* <SlideNav /> */}
      <Box >
        <Header />
        <Box sx={{flex: 1}}>
        <Contact  />
        </Box>
        <Footer />
      </Box>

    </Box>
  );
}
  