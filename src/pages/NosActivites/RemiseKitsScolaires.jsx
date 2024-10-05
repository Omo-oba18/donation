import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/fournitures-scolaires-lycee.jpeg";
import donKitScolaire from "../../assets/images/campagne-7.jpg";
import donKitScolaire_1 from "../../assets/images/campagne-2.jpg";
const RemiseKitsScolaires = () => {
  return (
    <>
      <Banner height={{ xs: "44vh", sm: "50vh" }} imgUrl={bannerImg}>
        {/* Overlay Layer */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with adjustable opacity
            zIndex: 1,
          }}
        />
        <Stack
          direction="column"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            zIndex: 3,
            position: "relative",
          }}
        >
          <Typography
            textAlign="center"
            fontSize={{ xs: "32px", sm: "58px" }}
            sx={{
              color: "#fff",
              marginBottom: ".4em",
              fontFamily: "Lemonada, cursif",
            }}
            data-aos="fade-right"
          >
            Don de Kits Scolaires
          </Typography>
        </Stack>
      </Banner>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "2em",
          maxWidth: "800px",
          margin: "2em auto",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for "document" effect
          borderRadius: "8px",
          minHeight: "600px", // Set your preferred min-height
        }}
      >
        <Stack spacing={2} alignItems="center">
          {/* Title */}
          <Typography variant="h4" gutterBottom textAlign="center">
            SAVE VIGNON Soutient l'Éducation avec la Remise de Kits Scolaires
          </Typography>
          <img
            src={donKitScolaire}
            alt="don kit scolaire"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* First paragraph */}
          <Typography variant="body1" textAlign="justify">
            L’ONG SAVE VIGNON continue de placer l’éducation au cœur de ses
            actions en offrant des kits scolaires aux élèves en situation de
            vulnérabilité. Lors d’une cérémonie officielle, des kits complets,
            comprenant des cahiers, des stylos, des règles et des trousses, ont
            été remis à des centaines d’élèves.
          </Typography>

          {/* Second paragraph */}
          <Typography variant="body1" textAlign="justify">
            Ces dons visent à alléger le fardeau financier des parents tout en
            encourageant les élèves à poursuivre leur parcours éducatif dans de
            meilleures conditions. SAVE VIGNON croit fermement que chaque enfant
            mérite une chance égale de réussir, et nous continuerons à
            travailler pour garantir que l'éducation reste un droit accessible à
            tous.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              justifyContent: "space-evenly",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={donKitScolaire_1}
              alt="don de kit scolaire"
              style={{
                width: "50%",
                maxHeight: "400px", // Adjust the size
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Typography variant="body2" textAlign="justify" sx={{margin:"0 1em"}}>
              Cette remise symbolise notre engagement à contribuer à
              l’autonomisation des jeunes à travers l’éducation. En renforçant
              les moyens matériels de ces élèves, SAVE VIGNON œuvre pour un
              meilleur avenir pour les enfants et leurs communautés, en
              facilitant leur accès aux outils indispensables à leur réussite
              académique.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default RemiseKitsScolaires;
