"use client";
import { Box, Divider, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  pb: 3,
  zIndex: 1,
};
const Cards = ({ emoji, heading, detail, skill }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        className="expertise-card"
        p={4}
        borderRadius={3}
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        justifyContent="center"
        alignItems="center"
        gap={{ lg: 5, xs: 1 }}
        py={2}
        width={"100%"}
      >
        <Box
          py={{ lg: 5, xs: 2 }}
          px={{ lg: 5, xs: 2 }}
          bgcolor="#ea4343"
          borderRadius={15}
          color="white"
        >
          {emoji}
        </Box>
        <Box lineHeight={1.5}>
          <Typography
            display="grid"
            justifyContent={{ lg: "flex-start", xs: "center" }}
            variant="span"
            fontSize={25}
            color="#393332"
            fontWeight="bold"
          >
            {heading}
          </Typography>
          <Box
            mt={2}
            color="gray"
            display="grid"
            justifyContent={{ lg: "flex-start", xs: "center" }}
          >
            {detail}
          </Box>
          <Box
            my={1}
            color="#ea4343"
            sx={{ cursor: "pointer" }}
            display="grid"
            justifyContent={{ lg: "flex-start", xs: "center" }}
            onClick={handleOpen}
          >
            {" "}
            Read More
          </Box>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            width: 1000,
            height: 500,
            border: "none !important",
            // overflowY: "scroll",
          }}
        >
          <Box
            display="flex"
            justifyContent="end"
            color="gray"
            p={1}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
          <Box mt={4} px={4}>
            {/* <Box>
              <Image width="100%" height='auto' overflow='hidden' src={image}/>
            </Box> */}
            <Typography
              id="transition-modal-title"
              variant="h6"
              color="#393332"
              component="h2"
              fontWeight="bold"
              py={2}
            >
              {heading}
            </Typography>
            <Divider />
            <Box id="transition-modal-description" sx={{ mt: 2 }}>
              {skill}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Cards;
