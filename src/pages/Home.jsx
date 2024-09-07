import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { StyledButton } from "../misc/component";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import bannerImg from "../assets/images/banner-1.jpg";
import { fundraiser, objectives } from "../api/service";
import { Link } from "react-router-dom";

const Home = () => {
  // Define the base title and the new title to append
  const baseTitle = "ONG SAVE VIGNON";
  const pageTitle = "Bienvenue | " + baseTitle;

  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <Stack>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Banner height={{ xs: "74vh", sm: "80vh" }} imgUrl={bannerImg}>
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
            fontSize={{ xs: "42px", sm: "98px" }}
            sx={{
              color: "#fff",
              marginBottom: ".4em",
              fontFamily: "Kaushan Script, cursive",
            }}
            data-aos="fade-right"
          >
            Soutenir, Soigner et Inspirer
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "Mulish, sans-serif",
              fontSize: "24px",
            }}
          >
            Unissons-nous pour nourrir les rêves de ceux qui en ont le plus
            besoin. <br /> Chaque geste de générosité compte.
          </Typography>
          <Stack
            sx={{ marginTop: "2em" }}
            direction={{ xs: "column", sm: "row" }}
          >
            <StyledButton bgc="#4ACA4D !important" mbSmall="2em !important">
              Faire un don
            </StyledButton>
            <StyledButton ml="2em !important" mlSmall="0px !important">
              Voir les activites
            </StyledButton>
          </Stack>
        </Stack>
      </Banner>
      {/* <Box sx={{ flexGrow: 1 }} data-aos="fade-up">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ padding: "3em" }}
        >
          {gridItem.map((item, index) => (
            <Grid
              item
              xs={12}
              md={3}
              sm={4}
              key={index}
              sx={{
                border: "1px solid #c1c1c1",
                marginBottom: "1em",
                maxWidth: "100%",
              }}
            >
              <Stack
                sx={{
                  padding: "2em",
                  textAlign: "justify",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.icon}
                <Typography sx={{ marginTop: "1em", marginBottom: ".6em" }}>
                  {item.title}
                </Typography>
                <Typography>{item.text}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box> */}

      <Stack
        data-aos="zoom-in-down"
        sx={{ background: "#fff", padding: "3em" }}
      >
        <Typography
          fontSize={{ xs: "32px", md: "54px" }}
          fontFamily="Josefin Sans, sans-serif"
          textAlign="center"
          marginBottom=".6em"
        >
          Soutenir une campagne ou une collecte de fonds
        </Typography>
        <Typography textAlign="center">
          Assurer la couverture des besoins essentiels pour la suivi,
          principalement la sécurité alimentaire avec une implication effective
          des partenaires financiers
        </Typography>
        <Box sx={{ flexGrow: 1, paddingTop: "2em" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {fundraiser.map((fund, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  sx={{
                    width: "100%",
                    boxShadow: "rgb(221, 221, 221) 0px 7px 31px 0px",
                  }}
                  data-aos="flip-left"
                >
                  <Stack
                    direction="row"
                    sx={{
                      background: "#fff",
                      height: "100%", // Set height to 100%
                      width: "100%", // Set width to 100%
                      padding: "1em",
                      borderBottom: "2px solid #2E8A99",
                    }}
                  >
                    <img width="130px" height="130px" src={fund.src} alt="" />
                    <Stack sx={{ marginLeft: "1em" }}>
                      <Typography fontWeight={600}>{fund.title}</Typography>
                      <Typography>
                        {fund.currency} {fund.price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
      <Box sx={{ padding: "2rem", backgroundColor: "#F4F4F4" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Nos Buts et Objectifs
        </Typography>
        {objectives.map((obj, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlined />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{obj.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{obj.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box
        sx={{
          padding: "2em",
          height: { xs: "500px", sm: "400px" },
          background: "#2E8A99",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={{ xs: "32px", md: "54px" }}
            fontFamily="Josefin Sans, sans-serif"
            textAlign="center"
            marginBottom=".6em"
          >
            Découvrez comment votre don peut atteindre
          </Typography>
          <Typography textAlign="center">
            la Révolution française a constitué pour la conscience des dominants
            classe aristocratique une chute de l'innocence et un renversement de
            la nature chaîne d'événements qui a retenti.
          </Typography>
          <Stack
            sx={{ display: "flex", padding: "2em" }}
            direction={{ xs: "column", sm: "row" }}
          >
            <Button
              sx={{
                background: "#fff",
                color: "#000",
                textTransform: "capitalize",
                outline: "none",
                boxShadow: "none",
                textAlign: "center",
                borderRadius: "5px",
                cursor: "pointer",
                padding: "10px 30px",
                marginBottom: { xs: "1em", sm: "0" },
                marginRight: { xs: "0", sm: "1em" },
              }}
              component={Link}
              to="/contactez-nous"
            >
              Faire une Donation
            </Button>
            <Button
              sx={{
                background: "#fff",
                color: "#000",
                textTransform: "capitalize",
                outline: "none",
                boxShadow: "none",
                textAlign: "center",
                borderRadius: "5px",
                cursor: "pointer",
                padding: "10px 30px",
                marginTop: { xs: "1em", sm: "0" },
                marginLeft: { xs: "0", sm: "1em" },
              }}
              component={Link}
              to="/contactez-nous"
            >
              collecte de fonds
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
