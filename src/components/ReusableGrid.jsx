import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { StyledButton } from "../misc/component";

// Reusable Grid Component
const ReusableGrid = ({
  items,
  spacing = 2,
  backgroundColor = "#fff",
  minHeight = "200px",
  btnColor = "#4ACA4D !important",
  btnText = "default",
  hideBorder = false,
  txtColor = "#fff",
  isRounded = true,
}) => {
  const itemCount = items.length;

  return (
    <Grid
      container
      spacing={spacing}
      justifyContent={itemCount > 0 ? "center" : "flex-start"} // Center items
      style={{
        minHeight: minHeight, // Ensure there's a minimum height for the grid
        display: "flex",
        flexDirection: "row",
        alignItems: "center", // Center items vertically
      }}
    >
      {items.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={itemCount === 2 ? 6 : 3} // Adjust column size based on the item count
          md={itemCount === 2 ? 6 : 3}
          key={index}
        >
          <Paper
            data-aos="zoom-in" // Change to desired animation
            data-aos-delay={`${index * 100}`} // Staggered effect
            style={{
              padding: "16px",
              backgroundColor,
              minHeight,
              justifyContent: "space-evenly",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: isRounded ? "16px" : "0px",
              border: hideBorder ? "none" : "1px solid #e0e0e0", // Conditionally hide/show border
              boxShadow: hideBorder ? "none" : undefined, // Optionally remove shadow if no border
            }}
          >
            <Box display="flex" justifyContent="center" mb={2}>
              {item.icon}
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              align={item.titleAlign || "center"}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              paragraph
              textAlign={item.descriptionAlign || "justify"}
            >
              {item.description}
            </Typography>
            <Box display="flex" justifyContent="center">
              <StyledButton textColor={txtColor} bgc={btnColor}>
                {btnText}
              </StyledButton>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReusableGrid;
