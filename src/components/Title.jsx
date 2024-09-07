import { Typography } from "@mui/material";
import Aos from "aos";
import React, { useEffect } from "react";

const Title = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <Typography
      sx={{
        "&::before": {
          content: "''",
          backgroundColor: props.titleColor,
          width: "44px",
          height: "2px",
          marginRight: "10px",
        },
        lineHeight: "30px",
        fontWeight: "900",
        fontSize: props.size,
        color: props.titleColor,
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent:'center',
        fontFamily: "Lemonada, cursif",
        margin:".5em 0"
      }}
    >
      {props.text}
    </Typography>
  );
};
export default Title;
