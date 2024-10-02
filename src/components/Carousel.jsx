// CarouselComponent.js
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items, maxWidth = "300px" }) => {
  // Slider settings

  const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // Merge custom settings with default settings
  return (
    <Box sx={{ maxWidth, margin: "0 auto" }}>
      <Slider {...defaultSettings}>
        {items.map((item, index) => (
          <Box key={index} sx={{ textAlign: "center", padding: 2 }}>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
