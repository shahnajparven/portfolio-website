"use client";

import { Box, Button } from "@mui/material";

const Login = () => {
  return (
    <Box px={2}>
      <Button
        variant="contained"
       
        sx={{
          color: "#EA4343",
          backgroundColor: "white !important",
          boxShadow: "none !important",
          "&:hover": {
            backgroundColor: "#EA4343 !important",
            color: "white",
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "none",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
