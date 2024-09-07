import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import FaireDon from "./FaireDon";
import ParrainerEnfant from "./ParrainerEnfant";
import Banner from "../../components/Banner";
import Aos from "aos";
import bannerImg from "../../assets/images/no-child-hungry.jpg";
import Title from "../../components/Title";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <Stack>
      <Banner height={{ xs: "44vh", sm: "50vh" }} imgUrl={bannerImg}>
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
            Contact
          </Typography>
        </Stack>
      </Banner>
      <div style={{margin:"2em 0"}}></div>
      <Title titleColor="#0001FA" text="Contactez-nous" size="20px" />
      <FaireDon />
      <ParrainerEnfant />
    </Stack>
  );
};

export default Contact;
