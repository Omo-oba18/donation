import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/appui-pauvre-enfant.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReusableGrid from "../../components/ReusableGrid";
import { appuiPauvre } from "../../api/service";

const AppuiPlusPauvres = () => {
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
            Appui aux Plus Pauvres
          </Typography>
        </Stack>
      </Banner>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          backgroundColor: "#fff",
          padding: "2em",
          maxWidth: "1000px",
          margin: "2em auto",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for "document" effect
          borderRadius: "8px",
          minHeight: "600px", // Set your preferred min-height
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h3" gutterBottom textAlign="center">
            Programme Appui au Plus Pauvre
          </Typography>

          <Typography variant="h5">Objectifs du Programme</Typography>
          <Typography>
            1. <strong>Soulager la Pauvreté</strong> : Fournir un soutien
            alimentaire, vestimentaire et médical aux personnes en situation de
            pauvreté extrême. <br />
            <br /> 2. <strong>Éducation et Sensibilisation</strong> :
            Sensibiliser sur les droits et les opportunités disponibles pour les
            plus démunis. <br />
            <br /> 3. <strong>Renforcement des Capacités</strong> : Offrir des
            formations professionnelles et des ateliers pour améliorer la
            situation économique des bénéficiaires.
          </Typography>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ReusableGrid
              minHeight="350px"
              btnText="Voir plus"
              items={appuiPauvre}
              backgroundColor="#f3f3f3"
              spacing={4}
            />
          </Stack>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Impact</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Depuis le lancement du programme **Appui au plus pauvre**, nous
                avons touché des milliers de personnes, apportant des
                changements significatifs dans leur vie quotidienne. Grâce à
                votre soutien, nous avons pu créer un avenir meilleur pour ceux
                qui en ont le plus besoin.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </>
  );
};

export default AppuiPlusPauvres;
