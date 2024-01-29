import "./blogs.css";
import { Card } from "../blogs/Card";
import img1 from "../../asset/b6.jpg";
import img2 from "../../asset/b2.jpg";
import img3 from "../../asset/b3.jpg";
import img4 from "../../asset/b4.jpg";
import img5 from "../../asset/b5.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const Blogs = () => {
  const displayNone = {
    transform: "rotate(0deg)",
  };

  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [display, setDisplay] = useState(displayNone);

  const cxpend = () => {
    setHide(false);
    setShow(true);
    setDisplay(displayNone);
  };
  const expended = () => {
    setShow(false);
    setHide(true);
    setShow1(true);
    setDisplay(displayNone);
  };

  return (
    <Box className="blog">
      <Box className="container">
        <Box className="blog-title">
          <Typography variant="p" py={3} fontWeight={"bold"} fontSize={25}>
            Why Choose CreativeZone?
          </Typography>
          <Box className="hr-line" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{
            lg: "row",
            sm: "column",
            md: "column",
            xs: "column",
          }}
          gap={5}
        >
          <Box width={{ lg: "60%", sm: "100%", md: "100%", xs: "100%" }}>
            <Box boxShadow={1} sx={{ cursor: "pointer", ...display }} mt={2}>
              <Box borderRadius={8}>
                <Box px={2}>
                  <Box>
                    <Box className="blog-card">
                      <Card
                        img={img1}
                        title="Academic Expertise"
                        details="As the owner of CreativeZone, I understand the unique challenges of academic writing. We excel in delivering conscientiously researched dissertations, theses, blogs, assignments, and research papers that not only meet academic standards but also exceed expectations."
                      />
                    </Box>
                    <Box className="blog-card">
                      <Card
                        img={img4}
                        title="Creative Brilliance"
                        details="At the heart of our firm is a team of creative minds dedicated to breathing life into your ideas. From crafting engaging blog posts to producing dynamic vlogs, we infuse creativity into every piece of content, ensuring it stands out in the digital landscape."
                      />
                    </Box>
                    {show ? (
                      <Box
                        onClick={expended}
                        display={"flex"}
                        justifyContent={"center"}
                        py={2}
                      >
                        <ExpandMoreIcon />
                      </Box>
                    ) : null}
                  </Box>
                </Box>
              </Box>
              {hide ? (
                <Box>
                  <Box>
                    <Box className="blog-card">
                      <Card
                        img={img2}
                        title="Proven Track Record"
                        details="With a history of successful projects and satisfied clients, CreativeZone has earned a reputation for delivering high-quality content that resonates with the audience since 2018. Our commitment to excellence is reflected in the success stories of those we’ve had the privilege to work with."
                      />
                    </Box>
                    <Box className="blog-card">
                      <Card
                        img={img3}
                        title="Comprehensive Support"
                        details="Whether you are a student navigating the academic world or a business aiming to enhance its online presence, CreativeZone offers a diverse range of services.From academic papers to business content and vlogs, we have the expertise to meet your unique needs."
                      />
                    </Box>
                    <Box className="blog-card">
                      <Card
                        img={img5}
                        title="Client-Centric Approach"
                        details="We believe in building lasting relationships with our clients. Your goals, vision, and satisfaction are our top priorities. Our client-centric approach ensures that every piece of content we create aligns seamlessly with your objectives."
                      />
                    </Box>
                    {show1 ? (
                      <Box
                        onClick={cxpend}
                        display={"flex"}
                        justifyContent={"center"}
                        py={2}
                      >
                        <ExpandLessIcon />
                      </Box>
                    ) : null}
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Box>

          <Box width={{ lg: "40%", sm: "100%", md: "100%", xs: "100%" }}>
            <Typography variant="p" py={3} fontWeight={"bold"} fontSize={25} lineHeight={2}>
              Task Completing rate{" "}
            </Typography>
            <p>
              Speak with your own voice! On our marketplaces you can maintain
              your identity, build your brand and promote your work to the
              community.
            </p>
            <Box className="rating-box" display={"flex"}>
              <Typography py={1} width={"60%"} fontWeight={"bold"}   variant="p">
                Academic Writing
              </Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar">
                  <span className="tooltip">80%</span>
                </span>
              </Box>
            </Box>
            <Box className="rating-box" display={"flex"}>
              <Typography
              variant="p"
                py={1}
                width={"60%"}
                fontWeight={"bold"}
                ontWeight={"bold"}
              >
                Business Content
              </Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar four">
                  <span className="tooltip">10%</span>
                </span>
              </Box>
            </Box>
            <Box className="rating-box" display={"flex"}>
              <Typography
                variant="p"
                py={1}
                width={"60%"}
                fontWeight={"bold"}
                ontWeight={"bold"}
              >
                Blogging
              </Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar two">
                  <span className="tooltip">5%</span>
                </span>
              </Box>
            </Box>
            <Box className="rating-box" display={"flex"}>
              <Typography
                variant="p"
                py={1}
                width={"60%"}
                fontWeight={"bold"}
                ontWeight={"bold"}
              >
                Vlogs
              </Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar three">
                  <span className="tooltip">5%</span>
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
