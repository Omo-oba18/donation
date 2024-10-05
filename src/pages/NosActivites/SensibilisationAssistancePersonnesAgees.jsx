import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/images/personneAgee.jpg";
import { StyledButton } from "../../misc/component";
import assistanceAgee from "../../assets/images/campagne-4.jpg";
import { useModal } from "../../provider/ModalProvider";
import DonationModalContent from "../../components/DonationModal";

const SensibilisationAssistancePersonnesAgees = () => {
  const { openModal } = useModal();

  const handleDonateClick = () => {
    openModal(<DonationModalContent />); // Pass the content of the modal
  };
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
            Assistance aux personnes âgées
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
            Assistance aux Personnes Âgées : Une Action de Solidarité et de
            Bienveillance
          </Typography>

          {/* First paragraph */}
          <Typography variant="body1" textAlign="justify">
            SAVE VIGNON s'engage à soutenir et à améliorer la qualité de vie des
            personnes âgées à travers des campagnes de sensibilisation et des
            actions de terrain. Dans de nombreuses communautés, les personnes
            âgées sont souvent négligées et vivent dans des conditions
            difficiles, sans accès à des soins adéquats ou à une assistance
            sociale. <br /> <br /> SAVE VIGNON a organisé plusieurs campagnes
            visant à informer et sensibiliser les familles, les autorités
            locales et le grand public sur l'importance de prendre soin de nos
            aînés. Ces initiatives mettent l'accent sur la dignité, le respect
            et l’attention particulière que mérite cette tranche de la
            population.
          </Typography>

          {/* Image under first paragraph */}
          <img
            src={assistanceAgee}
            alt="campagne personne agee"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* Second paragraph */}
          <Typography variant="body1" textAlign="justify">
            En outre, SAVE VIGNON travaille main dans la main avec les
            communautés pour offrir une assistance concrète aux personnes âgées
            en situation de vulnérabilité, en leur fournissant des soins
            médicaux, des aides alimentaires, ainsi que des moments de partage
            et de réconfort. <br /> Notre mission est de garantir que chaque
            personne âgée reçoive le soutien et l’accompagnement dont elle a
            besoin pour vieillir dans la dignité et en bonne santé.
          </Typography>
          <StyledButton onClick={handleDonateClick} bgc="#4ACA4D !important">Faire un Don</StyledButton>
        </Stack>
      </Stack>
    </>
  );
};

export default SensibilisationAssistancePersonnesAgees;
