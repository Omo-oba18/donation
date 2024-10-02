import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Box, Stack, Typography } from "@mui/material";
import bannerImg from "../assets/images/Hunger-1-530x354.jpg";
import about1 from "../assets/images/about-img-1.jpg";
import Aos from "aos";
import { objectives } from "../api/service";
import ReusableGrid from "../components/ReusableGrid";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

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
            A propos de nous
          </Typography>
        </Stack>
      </Banner>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        sx={{
          padding: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* image */}
        <Box
          component="img"
          sx={{ height: "250px", marginRight: { sm: "3em" } }}
          src={about1}
          alt="a propos de nous"
          data-aos="fade-right"
        />
        {/*  qui somme nous  */}
        <Box
          sx={{
            marginLeft: { sm: "3em" },
            width: { sm: "450px" },
            marginBottom: { xs: "2em" },
          }}
          data-aos="fade-left"
        >
          <Typography
            variant="h3"
            textTransform="uppercase"
            textAlign="center"
            sx={{
              fontSize: "16px",
              marginBottom: "0.5em",
              fontFamily: "Lemonada, cursif",
            }}
          >
            Qui somme nous?
          </Typography>

          <Typography variant="body2" textAlign="justify">
            SAVE-VIGNON (Système d’Appui à la Vie Éducative-Vignon) est une
            Organisation Non Gouvernementale reconnue d'utilité publique,
            indépendante de toute appartenance politique ou religieuse et à but
            non lucratif. Elle est Créée en 2016 et regroupe des professionnels
            actifs, ainsi que des jeunes animés par une motivation soutenue de
            contribuer à la construction d’un monde plus juste et où les
            ressources sont accessibles et partagées de façon équitable. En-
            semble, ils travaillent de façon bénévole et en synergie pour
            répondre de façon efficace et durable aux demandes formulées par les
            communautés.
          </Typography>
          <Typography
            variant="body2"
            textTransform="uppercase"
            textAlign="justify"
            sx={{
              fontSize: "12px",
              margin: "0.4em 0",
              fontFamily: "Lemonada, cursif",
              color: "#0001FC",
            }}
          >
            Instaurer un système permanent pouvant permettre d'assurer à chacun
            son minimum vital, d’éradiquer la pauvreté et les inégalités et de
            promouvoir l’accès à l’éducation de base à tous les enfants et le
            développement des communautés à la base.
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          padding: { xs: "2em" },
          margin: "0 auto",
        }}
        data-aos="fade-up"
      >
        <Typography
          sx={{ fontFamily: "Lemonada, cursif" }}
          variant="h4"
          textAlign="center"
          textTransform="capitalize"
        >
          Notre mission
        </Typography>
        <Typography
          sx={{ margin: "1em 0" }}
          variant="body1"
          textAlign="justify"
        >
          Sensibiliser et initier la population à la solidarité internationale,
          en accompagnant les enfants démunis, orphelins, les jeunes
          déscolarisés et les femmes en difficulté de la rue du monde dans leur
          quotidien, en permettant des moments d’échanges, de joie, d’expression
          et d’enseignements mutuels. <br />
          <br />
          Chaque action entreprise dans la communauté est fondée sur les besoins
          prioritaires exprimés dans le respect des droits humains et dans la
          diversité.
        </Typography>
      </Box>
      <Box
        sx={{ padding: "2rem", backgroundColor: "#F4F4F4", margin: "2em 0" }}
        data-aos="zoom-in"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Nos Buts et Objectifs
        </Typography>
        <ReusableGrid
          items={objectives}
          spacing={2}
          backgroundColor="#f5f5f5"
          minHeight="350px"
          btnText="Voir plus"
        />
      </Box>
    </>
  );
};

export default About;
