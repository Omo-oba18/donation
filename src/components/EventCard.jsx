// EventCard.js
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const EventCard = ({ date, month, title, location, time }) => {
  return (
    <Stack
      direction="row"
      sx={{ display: "flex", alignItems: "center", marginBottom: "1em" }}
    >
      <Stack
        direction="column"
        sx={{
          background: "#4ACA4D",
          padding: "1em",
          maxWidth: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>{date}</Typography>
        <Typography>{month}</Typography>
      </Stack>
      <Box sx={{ color: "#000", margin: "0 .5em" }}>
        <Typography variant="h6">{title}</Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin:".3em 0"
          }}
        >
          <PlaceIcon color="#4ACA4D" /> {location} <br />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin:".3em 0"
          }}
        >
          <AccessTimeIcon color="#4ACA4D" /> {time}
        </Stack>
      </Box>
    </Stack>
  );
};

export default EventCard;
