import { Box, Typography } from "@mui/material";
import React from "react";
import aboutPicLeft from "../../asset/f2.jpeg";
import aboutPicLeftTop from "../../asset/f4.jpeg";
import Image from "next/image";
import "./style.css";

const About = () => {
  return (
    <Box id="about" className="abouts" mt={1}>
      <Box
        px={10}
        pt={10}
        pb={25}
        display={"flex"}
        flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        justifyContent={"space-evenly"}
        gap={2}
        width={"100%"}
      >
        <Box
          display={{ lg: "flex", md: "none", sm: "none", xs: "none" }}
          position={"relative"}
          width={"50%"}
          height={{ lg: "auto", xs: "90vh" }}
        >
          <Box
            width={"15rem"}
            height={"14rem"}
            sx={{ border: 5, borderColor: "white" }}
            position={"absolute"}
            top="0%"
            left={"20%"}
            zIndex={2}
            // className="effect"
          >
            <Image
              src={aboutPicLeftTop}
              width={"100%"}
              height={"100%"}
              alt="Picture of the author"
              zIndex={2}
            />
          </Box>
          <Box
            className="effect"
            width={"18rem"}
            height={"15rem"}
            sx={{ border: 5, borderColor: "white" }}
            position={"absolute"}
            top="30%"
            left={"-5%"}
            zIndex={5}
          >
            <Image
              src={aboutPicLeft}
              height={568}
              overflow="hidden"
              width={{ lg: 485, sm: "100%", xs: "100%" }}
              alt="banner-right-img"
              id="banner-right-img"
            />
          </Box>
        </Box>
        <Box width={{ lg: "60%", sm: "100%", xs: "100%" }}>
          <Typography
            variant="p"
            fontWeight={"bold"}
            color="#ffff"
            fontSize={30}
          >
            I am{" "}
            <Typography variant="p" color={"black"}>
              Mohammad Faisal Masud
            </Typography>
          </Typography>
          <br/>
          <Typography
            variant="p"
            color="#ffff"
            fontWeight={"bold"}
            py={1}
            fontSize={20}
            lineHeight={2}
          >
            {/* <Typography variant="span" color='#ffff'> */}
            Owner of CreativeZone
          </Typography>
          <br/>
          <Typography variant="p" fontWeight={"bold"} fontSize={18} lineHeight={2}>
            Based in London,UK
          </Typography>
          <Box py={3} lineHeight={2} color="#ffff">
            Hello there! I’m Mohammad Faisal Masud, I’ve completed my graduation
            and post-graduation from the University of Dhaka. I’m the proud
            founder and creative force behind CreativeZone- a freelance
            content-writing firm dedicated to transforming ideas into compiling
            narratives. With a passion for words and a commitment to excellence,
            I have built a team of ingenious, multi-talented writers ready to
            elevate your content game.
          </Box>
        </Box>
        <Box
          width={"30%"}
          position={"relative"}
          display={{ lg: "flex", md: "none", sm: "none", xs: "none" }}
        >
          <Box
            className="banner-right-con"
            width={"15rem"}
            height={"14rem"}
            sx={{ border: 8, borderColor: "white" }}
            position={"absolute"}
            top="50%"
            right={"0%"}
            zIndex={2}
          ></Box>
          <Box
            width={"10rem"}
            height={"10rem"}
            backgroundColor="#ea4343"
            position={"absolute"}
            top="85%"
            right={"-8%"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
