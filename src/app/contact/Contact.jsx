import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  return (
    <Box id="contact" px={{lg:10,md:10,sm:5,xs:3}} py={2} className='contacts' pt={5}>
      <Typography
        color="#ea4343"
        variant="span"
        fontSize={"1.5rem"}
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        className="font"
      >
        Get in Touch
      </Typography>
      <Typography
        color="#393332"
        variant="span"
        fontSize={30}
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        py={3}
      >
        Any Questions? Feel Free to Contact
      </Typography>
      <Box
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        gap={5}
        width="100%"
        overflow="hidden"
        py={2}
      >
        <Box
          bgcolor="#ea4343"
          borderRadius={3}
          color="white"
          width={{ lg: "40%",sm:'100%', xs: "100%" }}
        >
          <Box p={3.5}>
            <Box py={1} display="flex" gap={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
                width={30}
                borderRadius={15}
                bgcolor="#fca61f"
                p={2}
              >
                <LocationOnIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="p" fontSize={18} fontWeight="bold">
                  Address:
                </Typography>
               
                <Box>
                <Typography variant="p" fontSize={15} lineHeight={2}>(AAHMED BORHAN UDDIN)</Typography>
                <br/>
                <Typography variant="span" lineHeight={1.4} fontSize={15}>
                Street-9, Orsett Terrace Essex, Woodford Green- IG8 7BA, United Kingdom.
                </Typography>
                </Box>
                <Divider color='white' sx={{my:1}}/>
                <Box>
                <Typography variant="p" fontSize={15} lineHeight={2}>(Mr MD)</Typography>
                <br/>
                <Typography variant="span" lineHeight={1.4} fontSize={15}>
                10 Doric Close, Beswick, Manchester M113QD, United Kingdom.
                </Typography>
                </Box>
              </Box>
            </Box>
            <Box py={2} display="flex" gap={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
                width={30}
                borderRadius={15}
                bgcolor="#fca61f"
                p={2}
              >
                <EmailIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="p" fontSize={18} fontWeight="bold">
                  Email:
                </Typography>
                <Box>
                <Typography variant="span" lineHeight={1.4}>
                  faisalmasud3419@gmail.com <br/>
                  workorders.creativezone.rafi@gmail.com
                </Typography>
                </Box>
              </Box>
            </Box>
            <Box py={3} display="flex" gap={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
                width={30}
                borderRadius={15}
                bgcolor="#fca61f"
                p={2}
              >
                <LocalPhoneIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="p" fontSize={18} fontWeight="bold">
                  Phone:
                </Typography>
                <Box>

                <Typography variant="span" lineHeight={1.4}>
                  +880 1521498607
                </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width={{ lg: "70%", xs: "100%" }}>
          <Box width="100%">
            <Box display="flex" gap={2} my={2}>
              <Box width={{ lg: "50%", xs: "100%" }}>
                <TextField
                  variant="outlined"
                  type="text"
                  p={2}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderRadius: 8,
                        border: 1,
                        borderColor: "#ea4343",
                      },
                    },
                    width: "100%",
                  }}
                  InputProps={{ disableUnderline: true }}
                  placeholder="Name"
                />
              </Box>
              <Box className="contact" width={{ lg: "50%", xs: "100%" }}>
                <TextField
                  type="text"
                  p={2}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderRadius: 8,
                        border: 1,
                        borderColor: "#ea4343",
                      },
                    },
                    width: "100%",
                  }}
                  placeholder="Email"
                />
              </Box>
            </Box>
            <Box display="flex" gap={2} my={2}>
              <Box className="contact" width={{ lg: "50%", xs: "100%" }}>
                <TextField
                  type="text"
                  p={2}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderRadius: 8,
                        border: 1,
                        borderColor: "#ea4343",
                      },
                    },
                    width: "100%",
                  }}
                  placeholder="Phone"
                />
              </Box>
              <Box className="contact" width={{ lg: "50%", xs: "100%" }}>
                <TextField
                  type="text"
                  p={2}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderRadius: 8,
                        border: 1,
                        borderColor: "#ea4343",
                      },
                    },
                    width: "100%",
                  }}
                  placeholder="Subject"
                />
              </Box>
            </Box>
            <Box className="contact">
                <Stack sx={{
                      border: 1,
                      borderColor: "#ea4343",
                      minRows:10
                }}>
              <textarea
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderRadius: 8,
                      border: 1,
                      borderColor: "#ea4343",
                      minRows:10
                    },
                  },
                }}
                className="textarea"
                type="text"
              />
              </Stack>
            </Box>
          </Box>
          <Box py={2} display="flex" justifyContent="center">
            <Button
              variant="outlined"
              type="submit"
              sx={{
                width:'10rem',
                borderColor:"#ea4343",
                color: "black",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor:"#ea4343",
                  borderColor: "#ea4343",
                  boxShadow: "none",
                  color: "white",
                },
                "&:focus": {
                  boxShadow: "#F6F4EB",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
