import Image from "next/image";
// import "./blogs.css";
import { Box, Typography } from "@mui/material";

export const Card = ({ img, title, details }) => {
  return (
    // <div className="container">
    <Box className="cards">
      <Box className="card" py={2.5} display={'flex'} flexDirection={{lg:'row',md:'column',sm:'column',xs:'column'}} justifyContent={'center'} alignItems={'center'} gap={2}>
        <Box className="card-img" width={{lg:'30%',sm:'100%',md:"100%",xs:'100%'}}>
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            overflow="hidden"
            alt="Picture of the blogs"
          />
        </Box>
        <Box className="card-title" width={{lg:'70%',sm:'100%',md:"100%",xs:'100%'}} px={2}>
          <Typography variant="h5" fontSize={18} fontWeight={"bold"} py={1}>
            {title}
          </Typography>
          <Typography fontSize={15}>{details}</Typography>
        </Box>
      </Box>
    </Box>
    // </div>
  );
};
