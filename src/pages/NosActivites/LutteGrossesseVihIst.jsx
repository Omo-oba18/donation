import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/grosses-scolaire.jpg";
import caricaGrossesses from "../../assets/images/carica-grossesse.jpg";
import schoolSensibilisation from "../../assets/images/sensibilisation-grossesses.jpeg";

const LutteGrossesseVihIst = () => {
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
            Grossesse précoce en milieu scolaire
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
          Lutte contre la grossesse précoce en milieu scolaire
        </Typography>

        <Stack
          spacing={2}
          sx={{
            marginBottom: "2em",
            display: "flex",
            alignItems: "flex-start",
          }}
          direction={{ xs: "column-reverse", sm: "row" }}
        >
          <Box>
            <img
              src={caricaGrossesses}
              alt="Impact"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </Box>
          <Box>
            <Typography variant="body1" textAlign="justify">
              La majorité des filles-mères se retrouvent contraintes à
              abandonner leur parcours scolaire, réduisant ainsi leurs chances
              d’accéder à une éducation complète. Cela accentue également les
              inégalités entre filles et garçons en matière d'éducation.
              L'abandon scolaire qui résulte souvent de la grossesse précoce
              entraîne des répercussions durables sur les opportunités
              économiques et sociales des filles.
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
            La grossesse précoce est un véritable fléau qui continue de sévir
            dans plusieurs régions, notamment en milieu scolaire. Ce phénomène
            compromet non seulement l'avenir des jeunes filles concernées, mais
            il met également en péril leur santé physique, mentale et leur
            éducation. L'enjeu de la lutte contre les grossesses précoces est
            donc un impératif à la fois social et éducatif.
          </Typography>
        </Stack>

        <Stack direction="column" spacing={2} sx={{ margin: "2em 0" }}>
          <Typography variant="body1" textAlign="justify">
            La communauté scolaire, incluant les enseignants, les parents et les
            autorités éducatives, doit s’impliquer activement dans cette lutte.
            Des programmes éducatifs doivent être mis en place afin de
            promouvoir la santé reproductive et permettre aux jeunes filles de
            prendre conscience des conséquences de la grossesse sur leur avenir.
            Le soutien psychologique et matériel des jeunes mères est également
            crucial pour leur permettre de continuer leur scolarité.
          </Typography>
        </Stack>
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
              src={schoolSensibilisation}
              alt="Ecole sensibilisation"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </Box>
          <Box>
            <Typography variant="body1" textAlign="justify">
              Pour lutter efficacement contre la grossesse précoce, la
              sensibilisation joue un rôle clé. Il est nécessaire d'enseigner
              aux élèves, filles et garçons, les conséquences des rapports
              sexuels précoces, et d'encourager l'adoption de comportements
              responsables. Des séances d’information régulières, des campagnes
              de prévention, ainsi que l’éducation à la santé sexuelle peuvent
              aider à réduire les risques.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default LutteGrossesseVihIst;
