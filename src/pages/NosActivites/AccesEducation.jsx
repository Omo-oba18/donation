import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/access-education-tous.jpg";
import remiseKit from "../../assets/images/education-tous.jpg";
import { StyledButton } from "../../misc/component";
const AccessEducation = () => {
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
            Accès à l'éducation pour tous
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
          <Typography variant="body1" textAlign="justify">
            L’éducation est un droit fondamental et un puissant levier de
            transformation sociale. Pourtant, de nombreux enfants à travers le
            monde n'ont toujours pas accès à une éducation de qualité, en raison
            de divers obstacles économiques, géographiques ou sociaux. C'est
            pourquoi SAVE VIGNON s'engage activement à rendre l'éducation
            accessible à tous, en particulier aux enfants des communautés les
            plus vulnérables. <br />
            <br />
            Grâce à des initiatives telles que la remise de kits scolaires et
            des programmes de soutien éducatif, nous contribuons à réduire les
            inégalités et à offrir aux jeunes les outils dont ils ont besoin
            pour réussir. En partenariat avec des donateurs et des bénévoles
            dévoués, nous croyons qu'en investissant dans l'éducation, nous
            investissons dans l'avenir.
          </Typography>
          <img
            src={remiseKit}
            alt="remise kit scolaire"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <Typography variant="body1" textAlign="justify">
            En offrant des ressources éducatives essentielles, SAVE VIGNON
            s'efforce de créer des opportunités pour chaque enfant, peu importe
            son contexte socio-économique. Notre vision est de voir chaque élève
            devenir un acteur du changement, contribuant au développement de sa
            communauté et à la construction d’un avenir meilleur.
            <br />
            L'éducation pour tous, c’est garantir que chaque enfant puisse
            réaliser son plein potentiel et participer activement à la société.
          </Typography>
          <StyledButton bgc="#4ACA4D !important">Nous Rejoindre</StyledButton>
        </Stack>
      </Stack>
    </>
  );
};

export default AccessEducation;
