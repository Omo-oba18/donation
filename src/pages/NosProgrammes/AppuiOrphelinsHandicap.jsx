import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/enfant-handicape.jpg";
import enfantHandicap from "../../assets/images/handicap-inter.jpg";

const AppuiOrphelinsHandicap = () => {
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
            Appui aux Orphelins Handicap
          </Typography>
        </Stack>
      </Banner>
      <Stack
        direction={{ xs: "column", sm: "row" }}
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
            Programme Appui aux Orphelins Handicap
          </Typography>

          {/* First paragraph */}
          <Typography variant="body1" textAlign="justify">
            Le programme Appui aux Orphelins Handicap de l'ONG SAVE VIGNON vise
            à offrir un soutien global et personnalisé aux enfants orphelins en
            situation de handicap. Ce programme a été conçu pour répondre aux
            besoins spécifiques de ces enfants vulnérables et leur permettre de
            mener une vie digne, épanouissante et intégrée dans la société.
          </Typography>

          {/* Image under first paragraph */}
          <img
            src={enfantHandicap}
            alt="enfant handicap"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* Second paragraph */}
          <Typography variant="body1" textAlign="justify">
            Grâce au programme Appui aux Orphelins Handicap, nous avons réussi à
            transformer la vie de nombreux enfants. Nous avons vu des progrès
            significatifs en matière d'éducation, d'intégration sociale et
            d'autonomie personnelle. Notre engagement est de continuer à
            soutenir ces enfants et à œuvrer pour un avenir meilleur, où chaque
            enfant, quel que soit son handicap, ait la chance de réaliser son
            plein potentiel.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default AppuiOrphelinsHandicap;
