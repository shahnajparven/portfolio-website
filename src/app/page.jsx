"use client";
import Link from "next/link";
import About from "./about/About";
import { navigate } from "next/navigation";
import Header from "./Header";
import { Box, Button, Toolbar } from "@mui/material";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Service from "./services/Service";
import Testimonials from "./testimolials/Testimonials";
import Contact from "./contact/Contact";
import CreativeZone from "./creativezone/CreativeZone";

export default function Home() {
  return (
    <Box>
      <Box>
        <Header />
        <Toolbar />
      </Box>
      <Box>
        <Banner />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Service />
      </Box>
      <Box>
        <CreativeZone />
      </Box>
      <Box>
        <Testimonials />
      </Box>
      <Box>
        <Contact />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
