import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/access-eau-assaisnissement.jpg";
import eauSanteEnfant from "../../assets/images/enfant-eau-sante.jpg";
import enfantEauLac from "../../assets/images/fille-eau-lac.jpg";
const AccessEauAssainissement = () => {
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
            Accès à l'eau et à l'assainissement
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
            L'importance de l'accès à l'eau potable et à l'assainissement pour
            tous
          </Typography>
          <Typography variant="body1" textAlign="justify">
            L'accès à l'eau potable et à des installations sanitaires adéquates
            est un droit fondamental, pourtant des millions de personnes dans le
            monde continuent de vivre sans ces ressources essentielles. SAVE
            VIGNON travaille avec les communautés locales pour développer des
            infrastructures durables, comme des forages et des stations de
            traitement d'eau, afin de garantir que chaque famille puisse boire
            de l'eau propre et vivre dans des conditions hygiéniques. Ces
            initiatives améliorent non seulement la santé publique, mais elles
            renforcent aussi la dignité humaine.
          </Typography>
          <img
            src={eauSanteEnfant}
            alt="Autonomisation des filles mères"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <Stack
            spacing={2}
            sx={{
              marginBottom: "2em",
              display: "flex",
              alignItems: { xs: "center", sm: "flex-start" },
            }}
            direction={{ xs: "column", sm: "row-reverse" }}
          >
            <Box>
              <img
                src={enfantEauLac}
                alt="eau enfant lac"
                style={{ maxWidth: "300px", height: "auto" }}
              />
            </Box>
            <Box>
              <Typography variant="body1" textAlign="justify">
                L'absence d'infrastructures sanitaires expose les enfants à des
                risques de maladies graves. SAVE VIGNON mène des campagnes de
                sensibilisation sur l'hygiène dans les écoles, tout en
                construisant des latrines sûres et hygiéniques. Ces initiatives
                permettent aux enfants de grandir dans un environnement propre,
                essentiel pour leur développement physique et mental.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AccessEauAssainissement;
