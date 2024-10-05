import React from "react";
import Banner from "../../components/Banner";
import { Box, Stack, Typography } from "@mui/material";
import bannerImg from "../../assets/images/autonomisation_fille_mere.jpg";
import filleMere from "../../assets/images/fille_mere.jpg";
import { StyledButton } from "../../misc/component";
import { useModal } from "../../provider/ModalProvider";
import DonationModalContent from "../../components/DonationModal";


const AutonomisationFille = () => {
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
            Autonomisation Fille Mere
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
            Autonomisation des Filles Mères : Une Nouvelle Espérance
          </Typography>

          {/* First paragraph */}
          <Typography variant="body1" textAlign="justify">
            L'autonomisation des filles mères est un enjeu crucial pour
            promouvoir l'égalité des chances et leur permettre de bâtir un
            avenir meilleur, tant pour elles que pour leurs enfants. Trop
            souvent marginalisées et confrontées à des obstacles économiques,
            sociaux et éducatifs, ces jeunes femmes ont besoin d'un soutien
            adapté pour surmonter ces défis.
          </Typography>

          {/* Image under first paragraph */}
          <img
            src={filleMere}
            alt="Autonomisation des filles mères"
            style={{
              width: "80%",
              maxHeight: "400px", // Adjust the size
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* Second paragraph */}
          <Typography variant="body1" textAlign="justify">
            Chez ONG SAVE VIGNON, nous croyons fermement que chaque fille mère
            mérite une seconde chance. Nos programmes visent à leur offrir des
            formations professionnelles, des ressources pour l'éducation de
            leurs enfants, ainsi que des conseils en matière de santé et de
            bien-être. Nous les accompagnons dans leur chemin vers
            l'indépendance, en leur fournissant les outils nécessaires pour
            devenir des membres actifs de la société et pour réussir à élever
            leurs enfants dans un environnement stable et sécurisé.
          </Typography>
          <StyledButton onClick={handleDonateClick} bgc="#4ACA4D !important">
            Faire un Don
          </StyledButton>
        </Stack>
      </Stack>
    </>
  );
};

export default AutonomisationFille;
