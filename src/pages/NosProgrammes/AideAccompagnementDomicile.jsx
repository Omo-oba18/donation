import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/autonomisation_fille_mere.jpg";
import oldPerson from "../../assets/images/oldPerson.jpg";
const AideAccompagnementDomicile = () => {
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
            Service d'Aide et d'accompagnement à Domicile des personnes âgées
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
            Service d'Aide et d'Accompagnement à Domicile des Personnes Âgées
          </Typography>
          <img
            src={oldPerson}
            alt="person agee"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <Typography variant="body1" textAlign="justify">
            Le Service d'Aide et d'Accompagnement à Domicile des Personnes Âgées
            de l'ONG SAVE VIGNON a pour objectif de favoriser le maintien à
            domicile des personnes âgées, tout en leur offrant un cadre de vie
            serein et sécurisé. Ce programme s'adresse aux seniors qui
            souhaitent vivre dans leur environnement habituel tout en
            bénéficiant d'une assistance personnalisée adaptée à leurs besoins.
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Elle a un impact positif sur la vie des seniors et de leurs familles.
            Grâce à un accompagnement personnalisé, les bénéficiaires retrouvent
            une qualité de vie améliorée, un sentiment d'autonomie, et une
            diminution de l'isolement. Notre engagement est de continuer à
            développer ce service afin de répondre au mieux aux besoins des
            personnes âgées et de leur offrir une vie digne et épanouie à
            domicile.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default AideAccompagnementDomicile;
