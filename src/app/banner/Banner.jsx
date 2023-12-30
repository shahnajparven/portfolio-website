import { Box } from "@mui/material";
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
      alignItems={"center"}
      gap={5}
      px={{lg:"15",md:'0',xs:'0'}}
    >
      <Box width={{lg:"50%",md:'100%',xs:'100%'}} >
        <Box
        pl={5}
          className="banner-text"
          overflow="hidden"
        >
          <Box className="banner-heading">
            <Box className="dynamic-txt">
              <Box my={3}>
                <span>Hello, I Am</span>
              </Box>
              <b>Faisal Masud</b>
            </Box>
            <p>This is a Content writing freelancing firm.</p>
          </Box>
          {/* <Box display="flex" gap={3} mt={5} justifyContent={{lg:'left',md:'left',sm:'left',xs:'center'}}>
          <Box
            px={5}
            py={1.5}
            bgcolor="#fca61f"
            borderRadius="30px"
            className="hire-me"
            color='white'
          >
            <a href="#contact">Hire Me</a>
          </Box>
          <Box mt={1} borderBottom={2} borderColor="#6f34fe">
            <a href="#project" class="See-btn">
              See My Work
            </a>
          </Box>
        </Box> */}
        </Box>
      </Box>
      <Box width={{lg:"50%",md:'100%',xs:'100%'}}  p={{lg:10,md:0,sm:0,xs:0}}>
        <Image
          src={faisal}
          width={"100%"}
          height={"100%"}
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
