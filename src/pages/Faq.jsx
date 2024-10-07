import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import React, { useState } from "react";
import { faqData } from "../api/service";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ marginTop: "4em", padding: "2em 4em" }}>
      <Stack
        direction={{ sm: "row" }}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
          margin: { sm: "2em" },
        }}
      >
        <Stack
          direction="column"
          sx={{
            width: { sm: "60%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: "32px", sm: "48px" } }}>
            Questions Courantes sur <br /> Nos Activités
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "20px", sm: "22px" } }}
            marginTop=".6em"
          >
            Explorez nos réponses aux questions les plus fréquentes sur nos
            initiatives et services.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#4ACA4D",
            borderRadius: "20px",
            border: "none",
            height: { xs: "100px", sm: "300px" },
            width: { xs: "100%", sm: "25%" },
            marginTop: { xs: "1em" },
          }}
        >
          <WbTwilightIcon sx={{ color: "#fff", fontSize: "40px" }} />
        </Box>
      </Stack>
      <Box sx={{ padding: { xs: "2em 0", sm: "2em 3em" } }}>
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{
              marginBottom: "1em", // Margin between accordion panels
              border: "none", // Remove default border
              "&::before": {
                display: "none", // Remove the default border line before the accordion
              },
              "&::after": {
                content: '""',
                display: "block",
                height: "2px", // Height of the bottom border
                backgroundColor: "#4ACA4D", // Color of the underline
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index + 1}` ? <Remove /> : <Add />
              }
            >
              <Typography sx={{ fontSize: { xs: "18px", sm: "22px" } }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: { xs: "15px", sm: "20px" } }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
