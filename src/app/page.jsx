"use client";
import Link from "next/link";
import About from "./about/About";
import { navigate } from "next/navigation";

import { Box, Button, Toolbar } from "@mui/material";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Service from "./services/Service";
import Testimonials from "./testimolials/Testimonials";
import Contact from "./contact/Contact";
import CreativeZone from "./creativezone/CreativeZone";
import Blogs from "./blogs/Blogs";

export default function Home() {
  return (
    <Box>
      
      <Box>
        <Banner />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Service />
      </Box>
      {/* <Box>
        <CreativeZone />
      </Box> */}
      <Box>
        <Blogs />
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
