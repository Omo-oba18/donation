import {
  ArrowRight,
  Facebook,
  Favorite,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../misc/component";
import emailIcon from "../assets/icons/email.svg";
import phoneIcon from "../assets/icons/phone.svg";
import locationIcon from "../assets/icons/location.svg";
import infoIcon from "../assets/icons/info.svg";
import { fontSize } from "@mui/system";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "2em",
        background: "#000033",
        overflow: "hidden",
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginBottom: "1em",
          }}
          direction={{ xs: "column", sm: "row" }}
        >
          <Stack
            direction="column"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              padding: "2em",
              maxHeight: { sm: "200px" },
            }}
          >
            <Typography
              marginBottom=".5em"
              color="#fff"
              fontSize="16px"
              fontWeight={700}
            >
              A propos de nous
            </Typography>
            <Typography color="#fff" textAlign="justify" margin="1em 0">
              Depuis 2016, SAVE-VIGNON s'engage pour un monde plus équitable en
              soutenant les enfants démunis, les jeunes déscolarisés et les
              femmes en difficulté. Notre mission : promouvoir l'accès à
              l'éducation, combattre la pauvreté et encourager la solidarité.
            </Typography>
            <StyledButton
              component={Link}
              to="/contactez-nous"
              bgc="#4ACA4D !important"
            >
              Faire un don
            </StyledButton>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              padding: "2em",
            }}
          >
            <Typography
              marginBottom=".7em"
              color="#fff"
              fontSize="16px"
              fontWeight={700}
            >
              Newsletter
            </Typography>
            <Typography color="#fff" textAlign="justify" marginBottom=".4em">
              Inscrivez-vous a notre newsletter pour recevoir les informations
              recentes
            </Typography>
            <TextField
              id="input-with-icon-textfield"
              label="Email Address"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowRight
                      sx={{
                        background: "#0E2954",
                        color: "#fff",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              sx={{
                marginY: "1rem",
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#fff",
                },
                "& .MuiInputBase-input": {
                  color: "#fff", // Input text and cursor color
                  caretColor: "#fff", // Cursor color
                },
              }}
            />
            <Typography
              marginBottom=".7em"
              color="#fff"
              fontSize="16px"
              fontWeight={700}
            >
              Nous Suivre
            </Typography>
            <Stack direction="row">
              <Facebook sx={{ color: "#fff", margin: "0 0.5em" }} />
              <Twitter sx={{ color: "#fff", margin: "0 0.5em" }} />
              <Instagram sx={{ color: "#fff", margin: "0 0.5em" }} />
              <LinkedIn sx={{ color: "#fff", margin: "0 0.5em" }} />
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              padding: "2em",
              color: "#fff",
            }}
          >
            <Typography
              marginBottom=".7em"
              color="#fff"
              fontSize="16px"
              fontWeight={700}
            >
              Information
            </Typography>
            <Stack direction="row" sx={{ marginBottom: "1em" }}>
              <Box component="img" src={emailIcon} sx={{ height: "30px" }} />
              <Box sx={{ marginLeft: "1em" }}>
                <Typography>Téléphone</Typography>
                <Typography>+229 66 47 85 90 / +229 95 01 54 17</Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ marginBottom: "1em" }}>
              <Box component="img" src={phoneIcon} sx={{ height: "30px" }} />
              <Box sx={{ marginLeft: "1em" }}>
                <Typography>Email</Typography>
                <Typography>savevignon@gmail.com</Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ marginBottom: "1em" }}>
              <Box component="img" src={locationIcon} sx={{ height: "30px" }} />
              <Box sx={{ marginLeft: "1em" }}>
                <Typography>Location</Typography>
                <Typography>Lot 780, Dandji Hokanme, Cotonou Benin</Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              padding: "2em",
              color: "#fff",
            }}
          >
            <Typography
              marginBottom=".7em"
              color="#fff"
              fontSize="16px"
              fontWeight={700}
            >
              More
            </Typography>
            <Stack direction="row" sx={{ marginBottom: "1em" }}>
              <Box component="img" src={infoIcon} sx={{ height: "30px" }} />
              <Box sx={{ marginLeft: "1em" }}>
                <Typography>Sous</Typography>
                <Typography>No 2017/1896/DEP-LIT/SG/SAG-ASSOC</Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ marginBottom: "1em" }}>
              <Box component="img" src={infoIcon} sx={{ height: "30px" }} />
              <Box sx={{ marginLeft: "1em" }}>
                <Typography>No IFU</Typography>
                <Typography>6202011209805</Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ marginBottom: "1em" }}>
              <Box component="img" src={infoIcon} sx={{ height: "30px" }} />
              <Box sx={{ marginLeft: "1em" }}>
                <Typography>No NSIA Banque</Typography>
                <Typography>380 854 874 018</Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Typography
        sx={{ color: "#fff", marginTop: "1em", fontSize: "10px" }}
        textAlign="Center"
      >
        Copyright ©2024 All rights reserved | This template is designed by{" "}
        <Link to="https://mahch-solution.vercel.app" target="__blank">
          MAHCH Solution Inc
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
