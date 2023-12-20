"use client";
import Link from "next/link";
import About from "./about/page";
import { navigate } from 'next/navigation';
import Header from "./Header";
import { Box, Button, Toolbar } from "@mui/material";
import Banner from "./banner/Banner";

export default function Home() {
  return (
    <Box>
      <Box>
      <Header/>
      <Toolbar/>
      </Box>
      <Box>
     
      <Banner/>
      </Box>
      
      {/* <Box>
        <About />
        </Box> */}
    </Box>
  );
}
