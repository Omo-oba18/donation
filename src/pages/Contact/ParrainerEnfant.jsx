import { Box, Stack, Typography, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { StyledButton } from "../../misc/component";
import AOS from "aos";

const ParrainerEnfant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack
        sx={{
          flexDirection: { sm: "row", xs: "column" },
          padding: "2em",
          display: "flex",
          justifyContent: "space-evenly",
        }}
        data-aos="fade-down"
      >
        <Box sx={{ width: "40%" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "50px", textAlign: "left", marginBottom: "1rem" }}
          >
            Parrainer, c’est bâtir un avenir
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Le parrainage d’un enfant avec SAVE VIGNON est bien plus qu’un
            simple don. C’est un engagement à transformer la vie d’un enfant en
            lui offrant des opportunités d'éducation, de santé, et de bien-être.
            Votre soutien permet de construire un avenir meilleur, non seulement
            pour cet enfant, mais aussi pour sa communauté. Faites un geste
            aujourd'hui et devenez un mentor inspirant pour un jeune en quête
            d’espoir.
          </Typography>
        </Box>
        <Box sx={{ width: "40%" }}>
          <TextField
            id="nom"
            label="Nom"
            sx={{ width: "100%", margin: "6px 0" }}
          />
          <TextField
            id="prenoms"
            label="Prenoms"
            sx={{ width: "100%", margin: "6px 0" }}
          />
          <TextField
            id="email"
            label="Email"
            sx={{ width: "100%", margin: "6px 0" }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Ecrivez votre message ici"
            multiline
            rows={4}
            sx={{ width: "100%", margin: "6px 0" }}
          />
          <StyledButton sx={{ width: "100%", margin:"6px 0" }} bgc="#4ACA4D !important">
            Envoyez
          </StyledButton>
        </Box>
      </Stack>
    </div>
  );
};

export default ParrainerEnfant;
