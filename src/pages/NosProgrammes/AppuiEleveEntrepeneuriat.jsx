import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/autonomisation_fille_mere.jpg";
import entrepreneuriat from "../../assets/images/carica-entrepeneuriat.jpg";

const AppuiEleveEntrepeneuriat = () => {
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
            Appui aux Élèves, et à la formation l'entrepreneuriat
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
        <Typography variant="h4" gutterBottom textAlign="center">
          Programme Appui aux Élèves et à la Formation en Entrepreneuriat
        </Typography>

        <Stack
          spacing={2}
          sx={{
            marginBottom: "2em",
            display: "flex",
            alignItems: "flex-start",
          }}
          direction={{ xs: "column-reverse", sm: "row-reverse" }}
        >
          <Box>
            <img
              src={entrepreneuriat}
              alt="Impact"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </Box>
          <Box>
            <Typography variant="body1" textAlign="justify">
              Le programme Appui aux Élèves et à la Formation en Entrepreneuriat
              de l'ONG SAVE VIGNON vise à encourager et à soutenir les jeunes
              dans leur parcours éducatif tout en leur fournissant les
              compétences nécessaires pour devenir des entrepreneurs
              responsables et innovants. Ce programme s'adresse aux élèves issus
              de milieux défavorisés et vise à créer des opportunités qui leur
              permettront de bâtir un avenir meilleur.
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            marginTop: "2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" textAlign={"justify"}>
            <strong>1. Objectifs du Programme Soutien Éducatif :</strong>
            Fournir des ressources pédagogiques et un accompagnement scolaire
            pour aider les élèves à surmonter les difficultés académiques et à
            réussir leur parcours scolaire. <br />{" "}
            <strong>2. Formation en Entrepreneuriat :</strong>
            Offrir des formations pratiques sur les compétences
            entrepreneuriales, y compris la gestion d'entreprise, le marketing,
            la finance et la créativité, pour encourager les élèves à développer
            leurs propres projets. <br />{" "}
            <strong>3. Accès à des Ressources : </strong>
            Faciliter l'accès à des outils et des ressources essentiels, tels
            que des ordinateurs, des livres et des matériels didactiques, pour
            soutenir l'apprentissage des élèves.
            <br /> <strong>4. Mentorat et Réseautage :</strong> Mettre en place
            des programmes de mentorat où des entrepreneurs expérimentés
            partagent leur expertise avec les jeunes, les aidant à créer des
            réseaux et à développer des idées d'entreprise. <br />{" "}
            <strong>5. Promotion de l’Innovation Sociale : </strong> Encourager
            les élèves à développer des projets qui répondent aux besoins de
            leur communauté, favorisant ainsi une approche d'entrepreneuriat
            social.
          </Typography>
        </Stack>

        <Stack direction="column" spacing={2} sx={{ margin: "2em 0" }}>
          <Typography variant="body1" textAlign="justify">
            Ce a  déjà eu un impact significatif sur la vie de nombreux jeunes. Les
            participants ont acquis des compétences précieuses, augmenté leur
            confiance en eux et sont devenus plus aptes à entreprendre des
            initiatives économiques. Notre objectif est de continuer à investir
            dans l'éducation et l'entrepreneuriat, afin d'offrir aux jeunes des
            outils qui leur permettront de réaliser leurs rêves et de contribuer
            au développement de leur communauté.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default AppuiEleveEntrepeneuriat;
