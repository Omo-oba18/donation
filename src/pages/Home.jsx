import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import bannerImg from "../assets/images/banner-1.jpg";
import { donates, eventCarousel, events, reports } from "../api/service";
import ReusableGrid from "../components/ReusableGrid";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import EventCard from "../components/EventCard";
import VideoPlayer from "../components/VideoPlayer";
import DonationModalContent from "../components/DonationModal";
import { useModal } from "../provider/ModalProvider";
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
  const { openModal } = useModal();

  const handleDonateClick = () => {
    openModal(<DonationModalContent />); // Pass the content of the modal
  };
  const handleOpenPdf = () => {
    const pdfUrl = "../assets/docs"; // Path to the PDF in the public folder
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <Stack>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/*  */}

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
          ></Stack>
        </Stack>
      </Banner>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          padding: { xs: "0 2em", sm: "0 5em" },
          transform: { sm: "translateY(-150px)" },
        }}
      >
        <ReusableGrid
          items={donates}
          backgroundColor="#4ACA4D"
          spacing={0}
          hideBorder={true}
          btnText="Faire un don"
          btnColor="#fff !important"
          textColor="#000"
          isRounded={false}
          handleEvent={handleDonateClick}
          minHeight="300px"
        />
      </Stack>
      <Typography
        textAlign="center"
        sx={{ margin: "1em 0", fontSize: { xs: "28px", sm: "36px" } }}
      >
        ONG SAVE VIGNON -- Ensemble relevons de grand defi
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          alignItems: { xs: "center", sm: "start" },
          justifyContent: "center",
        }}
      >
        <Stack direction="column" sx={{ alignItems: "center" }}>
          <Title titleColor="#000" text="Les Ceremonies" size="16px" />
          <Carousel items={eventCarousel} maxWidth="400px" />
        </Stack>
        <Box sx={{ margin: "0 2em" }}>
          <VideoPlayer
            src="https://www.youtube.com/embed/nC1rHs2gHcA" // Replace with your video URL
            title="Société : l&#39;Ong Save-Vignon fait don de kits scolaires aux apprenants de Dandji"
          />
        </Box>
        <Stack direction="column" sx={{ alignItems: "center" }}>
          <Title titleColor="#000" text="Les Evenements à venir" size="16px" />
          <Stack direction="column" spacing={2}>
            {events.map((event, index) => (
              <EventCard
                key={index}
                date={event.date}
                month={event.month}
                title={event.title}
                location={event.location}
                time={event.time}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Box
        data-aos="zoom-in-down"
        sx={{
          background: "#f0fce9",
          padding: { xs: "7em 2em", sm: "7em 0" },
          display: "flex",
          justifyContent: "center",
          margin: "1.5em 0",
        }}
      >
        <Box sx={{ maxWidth: { sm: "60rem" } }}>
          <Typography
            fontFamily="Josefin Sans, sans-serif"
            sx={{
              lineHeight: "1.2",
              fontWeight: "600",
              fontSize: { xs: "22px", md: "34px" },
              marginBottom: ".5em",
            }}
          >
            Soutenir une campagne ou <br /> une collecte de fonds
          </Typography>
          <Typography sx={{ lineHeight: "1.6" }}>
            Engagée à apporter un soutien essentiel aux plus vulnérables, notre
            plateforme œuvre pour l'autonomisation des filles mères, l'accès à
            une éducation pour tous et la prévention des grossesses précoces en
            milieu scolaire. Nos programmes visent à améliorer les conditions de
            vie des plus démunis, à favoriser l'accès à l'eau potable et à
            offrir un accompagnement à domicile pour les personnes âgées.
            Ensemble, nous créons un avenir plus juste et solidaire, où chacun a
            la possibilité de s'épanouir.
            <Typography sx={{ marginTop: ".6em" }}>
              Vous avez de{" "}
              <Link to="/faq" style={{ color: "#000" }}>
                questions
              </Link>
              ? Mieux savoir sur l'
              <strong>ONG SAVE VIGNON</strong>
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: "2em", marginBottom: "2em" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          marginBottom=".5em"
        >
          Nos Rapports d'Activités
        </Typography>
        <ReusableGrid items={reports} btnText="Voir" handleEvent={handleOpenPdf} />
      </Box>
    </Stack>
  );
};

export default Home;
