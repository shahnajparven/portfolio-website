import "./blogs.css";
import { Card } from "../blogs/Card";
import img1 from "../../asset/img1.jpg";
import img2 from "../../asset/img2.jpg";
import img3 from "../../asset/img3.jpg";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, makeStyles } from "@mui/material";
import { useState } from "react";

const Blogs = () => {
    const displayNone = {
    //    borderRedius:5,

    transform: 'rotate(0deg)',
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
      <Box className="container" >
        <Box className="blog-title">
          <Typography variant="h5" py={3} fontWeight={"bold"}>
            Why Choose CreativeZone?
          </Typography>
          <Box className="hr-line" />
        </Box>
        <Box display={'flex'} flexDirection={{lg:'row', sm:'column',md:'column',xs:'column'}} gap={5}>
          <Box width={{lg:'60%',sm:'100%',md:"100%",xs:'100%'}}>
            <Box boxShadow={1} sx={{ cursor: 'pointer', ...display }} mt={2}>
              <Box borderRadius={8} >
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
                        img={img2}
                        title="Creative Brilliance"
                        details="At the heart of our firm is a team of creative minds dedicated to breathing life into your ideas. From crafting engaging blog posts to producing dynamic vlogs, we infuse creativity into every piece of content, ensuring it stands out in the digital landscape."
                      />
                    </Box>
                    {show ? (
                      <Box onClick={expended} display={'flex'} justifyContent={'center'} py={2}>
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
                      img={img3}
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
                      img={img3}
                      title="Client-Centric Approach"
                      details="We believe in building lasting relationships with our clients. Your goals, vision, and satisfaction are our top priorities. Our client-centric approach ensures that every piece of content we create aligns seamlessly with your objectives."
                    />
                  </Box>
                  {show1 ? (
                    <Box onClick={cxpend} display={'flex'} justifyContent={'center'} py={2}>
                      <ExpandMoreIcon />
                    </Box>
                  ) : null}
                 
                </Box>
              </Box>
               ) : null}
            </Box>
          </Box>

          <Box width={{lg:'40%',sm:'100%',md:"100%",xs:'100%'}}>
            <Typography variant="h5" py={3} fontWeight={"bold"}>
              Task Completing rate{" "}
            </Typography>
            <p>
              Speak with your own voice! On our marketplaces you can maintain
              your identity, build your brand and promote your work to the
              community.
            </p>
            <Box className="rating-box" display={'flex'}>
                <Typography py={1} width={'60%'} fontWeight={'bold'}>Academic Writing</Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar">
                  <span className="tooltip">80%</span>
                </span>
              </Box>
            </Box>
            <Box className="rating-box" display={'flex'}>
            <Typography py={1} width={'60%'} fontWeight={'bold'} ontWeight={'bold'}>Business Content</Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar four">
                  <span className="tooltip">10%</span>
                </span>
              </Box>
            </Box>
            <Box className="rating-box" display={'flex'}>
            <Typography py={1}  width={'60%'} fontWeight={'bold'} ontWeight={'bold'}>Blogging</Typography>
              <Box className="rating-bar" mt={2}>
                <span className="skill-bar two">
                  <span className="tooltip">5%</span>
                </span>
              </Box>
            </Box>
            <Box className="rating-box" display={'flex'}>
            <Typography py={1} width={'60%'} fontWeight={'bold'} ontWeight={'bold'}>Vlogs</Typography>
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
