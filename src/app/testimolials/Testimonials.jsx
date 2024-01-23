/* eslint-disable react/jsx-key */
import { Box, Divider, Typography } from "@mui/material";
import img1 from "../../asset/about2.jpeg";
import Carousel from "react-material-ui-carousel";

const customer = [
  {
    img: img1,
    message:
      "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term  most commonly applies to the sales-pitches attributed to ordinary citizens,",
    name: "Sony wins",
  },
  {
    img: img1,
    message:
      "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term",
    name: "Mark wines",
  },
  {
    img: img1,
    message: "Lorembyfcgcftyftrdrsgbvjbkj",
    name: "jbhjhvhgvh",
  },
  {
    img: img1,
    message: "Lorembnbvhvhgvhgghcguyfuyfvufufgig",
    name: "jbhjhvhgvh",
  },
];
const Testimonials = () => {
  return (
    <Box px={10} py={3} backgroundColor="white">
      {" "}
      <Carousel
        indicatorIconButtonProps={{
          style: {
            borderRadius: "none",
            color: "gray",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#ea4343", // 2
          },
        }}
        s
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "15px",
            //   marginTop: 0, // 5
            textAlign: "center",
            zIndex: 2,
          },
        }}
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#2F7B92",
            borderRadius: 0,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: "100",
            top: "50px",
          },
        }}
        NextIcon={false}
        PrevIcon={false}
      >
        {customer.map((item) => (
          <Box
            backgroundColor="white"
            height="70vh"
            display="flex"
            justifyContent="center"
            flexDirection={"column"}
          >
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
                Testimonial
              </Typography>
              <Box fontSize={30} fontWeight={"bold"}>
                What Our Customer
              </Box>
              <Box fontSize={30} fontWeight={"bold"}>
                Says About Us
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              flexDirection={"column"}
              py={5}
            >
              <Box fontSize={50} color={"#ea4343"}>
                ❞
              </Box>
              <Box>{item.message}</Box>
              <Box py={1}>{item.name}</Box>
            </Box>
          </Box>
        ))}
      </Carousel>
      <Divider />
    </Box>
  );
};

export default Testimonials;
