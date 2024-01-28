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
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"#ea4343"}
          className="font"
        >
          Expertise
        </Typography>
        <Typography
          py={2}
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
            width={"100%"}
            my={{ lg: 4, md: 8, sm: 10, xs: 12 }}
            display="flex"
            justifyContent="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={{ lg: 4, md: 8, sm: 10, xs: 12 }}
          >
            <Box width={{lg:'50%',sm:'100%',md:"100%",xs:'100%'}}>
            <Cards
                emoji={<WebIcon fontSize="large" />}
                heading="Academic Writing"
                detail="Thoroughly researched dissertations, assignments, theses, and research papers that reflect academic excellence. "
                image={"#"}
                skill={"#"}
              />
             
            </Box>
            <Box width={{lg:'50%',sm:'100%',md:"100%",xs:'100%'}}>
              <Cards
                emoji={<WebAssetIcon fontSize="large" />}
                heading="Business Content"
                detail="Your brand through polished website content,social media updates, and marketing collateral that leave a lasting impression."
                image={"#"}
                skill={"#"}
              />
            </Box>
          </Box>
          <Box
            width={"100%"}
            my={{ lg: 4, md: 8, sm: 10, xs: 12 }}
            display="flex"
            justifyContent="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={{ lg: 4, md: 8, sm: 10, xs: 12 }}
          >
            <Box width={{lg:'50%',sm:'100%',md:"100%",xs:'100%'}}>
            <Cards
                emoji={<SubtitlesIcon fontSize="large" />}
                heading="Vlogs"
                detail="Engaging video content that tells your story in a visually appealing and impactful way, capturing the attention of your audience."
                image={"#"}
                skill={"#"}
              />
            </Box>
            <Box width={{lg:'50%',sm:'100%',md:"100%",xs:'100%'}}>
              <Cards
                emoji={<SubtitlesIcon fontSize="large" />}
                heading="Blogging"
                detail="SEO-optimized and captivating blog posts tailored to your niche, enhancing your online presence. "
                image={"#"}
                skill={"#"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
