import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import LandingImage from "../components/LandingImage";
import { StyledButton } from "../misc/component";
import {
  Business,
  Construction,
  LightMode,
  Storage,
} from "@mui/icons-material";
import image_1 from "../assets/images/Hunger-1-530x354.jpg";
import image_2 from "../assets/images/children-hand-penny.jpg";
import image_3 from "../assets/images/hunger-relief.jpg";
import image_4 from "../assets/images/children-orphan-eating.jpg";
const Home = () => {
  const gridItem = [
    {
      title: "total donation",
      icon: <LightMode />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      title: "Font reunis",
      icon: <Storage />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      title: "Don le plus eleves",
      icon: <Business />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      title: "total donation",
      icon: <Construction />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];
  const [alignment, setAlignment] = React.useState("");
  const fundraiser = [
    {
      title: "Help for cancer victims",
      price: "23,432",
      currency: "USD",
      src: image_1,
    },
    {
      title: "Help for orphan children in unganda",
      price: "123,432",
      currency: "EUR",
      src: image_2,
    },
    {
      title: "Help for pregnant women",
      price: "63,432",
      currency: "USD",
      src: image_3,
    },
    {
      title: "Help for homeless people victims for war",
      price: "423,432",
      currency: "USD",
      src: image_4,
    },
  ];

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Stack>
      <LandingImage height={{ xs: "74vh", md: "90vh" }}>
        <Stack
          direction="column"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Typography
            textAlign="center"
            fontSize={{ xs: "24px", sm: "58px" }}
            sx={{
              color: "#fff",
              marginBottom: ".7em",
              fontFamily: "Rock salt, cursive",
            }}
          >
            Soyons genereux envers nos enfants
          </Typography>
          <Typography color="#fff" textAlign="center">
            Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam vel fugiat tenetur..
          </Typography>
          <Stack
            sx={{ marginTop: "2em" }}
            direction={{ xs: "column", sm: "row" }}
          >
            <StyledButton bgc="#1f6e8c !important" mbSmall="2em !important">
              Faire un don
            </StyledButton>
            <StyledButton ml="2em !important" mlSmall="0px !important">
              Voir les activites
            </StyledButton>
          </Stack>
        </Stack>
      </LandingImage>
      <Box sx={{ flexGrow: 1 }}>
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
      </Box>
      <Stack direction="column" sx={{ background: "#84A7A1", padding: "3em" }}>
        <Typography
          fontSize={{ xs: "32px", md: "54px" }}
          fontFamily="Josefin Sans, sans-serif"
          sx={{ marginBottom: ".6em", textAlign: "center" }}
        >
          Faire un don aujourd'hui
        </Typography>
        <Typography
          sx={{ marginBottom: "1em", color: "#c9c9c9", textAlign: "center" }}
        >
          Les enfants de l'orphelinat Barots attendent de vos mains un don
          significatif. Faite le geste maintenant pour les soutenir.
        </Typography>
        <Box sx={{ background: "#fff", padding: "2em" }}>
          <ToggleButtonGroup
            exclusive
            orientation="vertical"
            value={alignment}
            onChange={handleChange}
            aria-label="Platform"
            sx={{ width: "100%" }}
          >
            <ToggleButton value="10" sx={{ marginBottom: "1em" }}>
              $10.00
            </ToggleButton>
            <ToggleButton value="50" sx={{ marginBottom: "1em" }}>
              $50.00
            </ToggleButton>
            <ToggleButton value="100" sx={{ marginBottom: "1em" }}>
              $10.00
            </ToggleButton>
            <ToggleButton value="250" sx={{ marginBottom: "1em" }}>
              $250
            </ToggleButton>
          </ToggleButtonGroup>
          <FormControl
            sx={{ width: "100%", marginBottom: "1em" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-others">Others</InputLabel>
            <OutlinedInput
              endAdornment={<InputAdornment position="end">USD</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <StyledButton bgc="#2E8A99 !important" sx={{ width: "100%" }}>
            Envoyer
          </StyledButton>
        </Box>
      </Stack>
      <Stack sx={{ background: "#fff", padding: "3em" }}>
        <Typography
          fontSize={{ xs: "32px", md: "54px" }}
          fontFamily="Josefin Sans, sans-serif"
          textAlign="center"
          marginBottom=".6em"
        >
          Soutenir une campagne ou une collecte de fonds
        </Typography>
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti
          repellat laborum laudantium incidunt impedit.
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
            a Révolution française a constitué pour la conscience des dominants
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
