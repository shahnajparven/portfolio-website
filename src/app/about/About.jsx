import { Box, Typography } from "@mui/material";
import React from "react";
import aboutPicLeft from "../../asset/about1.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <Box backgroundColor="#F9F5F6" mt={1}>
      <Box
        px={10}
        pt={10}
        pb={25}
        display={"flex"}
        flexDirection={{lg:"row",md:'column', sm:'cplumn',xs:"column"}}
        justifyContent={"space-evenly"}
        gap={2}
        width={"100%"}
      >
        <Box position={"relative"} width={"50%"}>
          <Box
            width={"15rem"}
            height={"14rem"}
            sx={{ border: 5, borderColor: "white" }}
            position={"absolute"}
            top="0%"
            left={"20%"}
            zIndex={2}
          >
            <Image
              src={aboutPicLeft}
              width={"100%"}
              height={"100%"}
              alt="Picture of the author"
              zIndex={2}
            />
          </Box>
          <Box
            className="banner-right-con wow slideInRight"
            id="banner-right-con"
            width={"18rem"}
            height={"15rem"}
            sx={{ border: 5, borderColor: "white" }}
            position={"absolute"}
            top="30%"
            left={"-18%"}
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
        <Box width={"60%"}>
          <Typography variant="h4" fontWeight={'bold'}>I'm  <Typography variant="span" color={'#ea4343'} >Faisal Masud</Typography></Typography>
          <Typography variant="h5" color={'#ea4343'} fontWeight={'bold'} py={1}><Typography variant="span" color={'black'}>Content</Typography> Writter</Typography>
          <Typography variant="h5" fontWeight={'bold'}  fontSize={20}>Based in London,UK</Typography>
          <Box py={3} lineHeight={2}>
             Hi! My name is
            Faisal Masud. I am Content Writter, and I'm very passionate and
            dedicated to my work with 10 years experience as a professional
            Content Writter, I have acquired the skills and
            knowledge necessary to make your project a success.
          </Box>
        </Box>
        <Box width={"50%"} position={"relative"}>
          <Box
            width={"15rem"}
            height={"14rem"}
            sx={{ border: 5, borderColor: "white" }}
            position={"absolute"}
            top="50%"
            right={"0%"}
            zIndex={2}
          >
            <Box
              width={"10rem"}
              height={"10rem"}
              backgroundColor="#ea4343"
              position={"absolute"}
              top="50%"
              right={"-15%"}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
