import {
  ArrowRight,
  Facebook,
  Favorite,
  Google,
  Instagram,
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

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "2em",
        background: "#0E2954",
        overflow: "hidden",
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
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
              maxHeight: "200px",
            }}
          >
            <Typography
              marginBottom=".7em"
              color="#fff"
              fontSize="16px"
              fontWeight={700}
            >
              A propos de nous
            </Typography>
            <Typography color="#84A7A1" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              officia similique reiciendis ab. Error nulla eaque beatae aliquid
              tenetur ad explicabo excepturi ea.
            </Typography>
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
            <Typography color="#84A7A1" textAlign="justify" marginBottom=".4em">
              Inscrivez a notre newsletter pour recevoir les informations
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
                  color: "#84A7A1",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#84A7A1",
                },
              }}
            />
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
              Nous Suivre
            </Typography>
            <Stack direction="row">
              <Facebook sx={{ color: "#84A7A1" }} />
              <Twitter sx={{ color: "#84A7A1" }} />
              <Instagram sx={{ color: "#84A7A1" }} />
              <Google sx={{ color: "#84A7A1" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Typography sx={{ bottom: "0", color: "#84A7A1" }} textAlign="Center">
        Copyright ©2023 All rights reserved | This template is made with{" "}
        <Favorite sx={{ color: "red" }} /> by <Link>Omo Oba</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
