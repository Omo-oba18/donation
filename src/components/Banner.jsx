import { Box } from "@mui/material";
import Aos from "aos";
import React, { useEffect } from "react";

const Banner = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: props.height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: "2em",
        backgroundImage: `url(${props.imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: props.blackAndWhite ? "grayscale(100%)" : "none",
      }}
      data-aos="fade-up"
    >
      {props.children}
    </Box>
  );
};

export default Banner;
