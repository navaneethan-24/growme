"use client";
import { Box } from "@mui/material";
import Header from "./components/landing-page/Header";
import Footer from "./components/landing-page/Footer";
import SlideNav from "./components/landing-page/SlideNav";
import ContactGroup from "./components/contact-Group";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SlideNav />
      <Box >
        <Header />
        <ContactGroup />
        <Footer />
      </Box>

    </Box>
  );
}
