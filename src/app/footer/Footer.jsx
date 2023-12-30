import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
// import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box bgcolor="#393332" mt={10} className="footer2">
      <Box
        className="footer"
        display="grid"
        justifyContent="center"
        alignItems="center"
        color="lightgray"
      >
        <Box width="100%">
          <Box py={8} display="grid" justifyContent="center">
            <Typography
              display="flex"
              justifyContent="center"
              variant="h5"
              py={2}
            >
              Faisal Masud
            </Typography>

            <Typography
              display="flex"
              justifyContent="center"
              variant="span"
              py={2}
            >
              Home | About | Expertise | Skill | Contact
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              {" "}
              <Link href="https://www.facebook.com/faisal.masud1">
                <Box
                  height={40}
                  width={40}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="#326da8"
                >
                  <FacebookIcon />
                </Box>
              </Link>
              <Link href="https://www.instagram.com/faisal_khan_sh?igsh=OGQ5ZDc2ODk2ZA%3D%3D">
                <Box
                  height={40}
                  width={40}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="red"
                >
                  <InstagramIcon />
                </Box>
              </Link>
              <Link href="#">
                <Box
                  height={40}
                  width={40}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="#20a5e3"
                >
                  <TwitterIcon />
                </Box>
              </Link>
              <Link href="https://www.linkedin.com/in/faisal-masud-9291581b8/">
                <Box
                  height={40}
                  width={40}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="#20a5e3"
                >
                  <LinkedInIcon />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="gray" mx={20}>
        <Divider />
      </Box>
      <Box
        py={3}
        display="flex"
        justifyContent="center"
        color="gray"
        variant="span"
      >
        <Typography lineHeight={1.8} variant="span">
          <CopyrightIcon fontSize="small" pt={2} />
        </Typography>{" "}
        <Typography variant="span" mt="3px" px={0.8}>
          Copyright 2023 | All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
