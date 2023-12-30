import { Box, Typography } from "@mui/material";
import faisal from "../../asset/faisal.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = ({ scaling }) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  return (
    <Box
      height={"auto"}
      width={"100%"}
      display={"flex"}
      flexDirection={{lg:'row', md:'column', sm:'column',xs:'column'}}
      justifyContent={{lg:"space-around",md:'center',sm:'center',xs:'center'}}
     
      gap={5}
      px={{lg:"15",md:'0',xs:'0'}}
    >
      <Box width={{lg:"50%",md:'100%',xs:'100%'}} >
        <Box
        pl={5}
          className="banner-text"
          overflow="hidden"
        >
          <Box className="banner-heading" pt={8}>
            <Box className="dynamic-txt">
              <Box>
                <span>Hello, I Am</span>
              </Box>
              <b>Faisal Masud</b>
            </Box>
            <p>This is a Content writing freelancing firm. Since 2018, Still miles to go.......</p>
            <Box py={5}>
            <Typography className="font" fontWeight={'bold'} color={'#ea4343 !important'} fontSize={'1.5rem !important'}>Your Words</Typography>
            <Typography  className="font" fontWeight={'bold'} color={'#ea4343'} fontSize={'1.5rem !important'}>Our experties</Typography>
            </Box>
          </Box>

        </Box>
      </Box>
      <Box  
      width={{lg:"30rem",md:'100%',xs:'100%'}}
            height={"30rem"}>
        <Image
          src={faisal}
          width={"100%"}
          height={"100%"}
          overflow='hidden'
          alt="Picture of the author"
        />
      </Box>
      <motion.div
        animate={{
          x: largeCircle.x - 32,
          y: largeCircle.y - 32,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.1 : 1 }}
      />
      <motion.div
        animate={{
          x: smallcircle.x - 8,
          y: smallcircle.y - 8,
          transition: { type: "spring", mass: 2 },
        }}
        className="small_circle"
      />
    </Box>
  );
};

export default Banner;
