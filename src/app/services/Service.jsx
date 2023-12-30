import { Box, Button, Typography } from "@mui/material";
import React from "react";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Cards from "../cards/Cards";

const Service = () => {
  return (
    <Box width="100%" id="services" height="auto" py={5} px={10}>
      <Box display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}>
        <Typography
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"#ea4343"}
          className="font"
        >
          Expertise
        </Typography>
        <Typography py={2}
          color="#393332"
          variant="span"
          fontSize={30}
          fontWeight="bold"
          display="flex"
          justifyContent="center"
        >
          We Will Support You to Prepaire your
        </Typography>

        <Box p={2}>
          <Box
            my={{ lg: 4, md: 8, sm: 10, xs: 12 }}
            display="flex"
            justifyContent="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={{ lg: 4, md: 8, sm: 10, xs: 12 }}
          >
            <Cards
              emoji={<WebIcon fontSize="large" />}
              heading="Dissertation"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing"
              image={"#"}
              skill={"#"}
            />
           
            <Cards
              emoji={<CodeIcon fontSize="large" />}
              heading="Thesis & Research Paper"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing"
              image={"#"}
              skill={"#"}
            />
          </Box>
          <Box
            my={{ lg: 4, md: 8, sm: 10, xs: 12 }}
            display="flex"
            justifyContent="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={{ lg: 4, md: 8, sm: 10, xs: 12 }}
          >
            <Cards
              emoji={<SubtitlesIcon fontSize="large" />}
              heading="Assignmnts"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing"
              image={"#"}
              skill={"#"}
            />
            <Cards
              emoji={<WebAssetIcon fontSize="large" />}
              heading="Vlog writing"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing"
              image={"#"}
              skill={"#"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
