import { Box } from "@mui/material";
import React from "react";

const LandingImage = (props) => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2020/05/31/04/36/investment-5241253_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: props.height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      marginBottom="2em"
    >
      {props.children}
    </Box>
  );
};

export default LandingImage;
