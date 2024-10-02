import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import bannerImg from "../assets/images/banner-1.jpg";
import {
  donates,
  eventCarousel,
  events,
  fundraiser,
  reports,
} from "../api/service";
import ReusableGrid from "../components/ReusableGrid";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import EventCard from "../components/EventCard";
import VideoPlayer from "../components/VideoPlayer";

const Home = () => {
  // Define the base title and the new title to append
  const baseTitle = "ONG SAVE VIGNON";
  const pageTitle = "Bienvenue | " + baseTitle;

  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);

  // const [selectedAmount, setSelectedAmount] = useState("");
  // const [customAmount, setCustomAmount] = useState("");

  // const handleAmountChange = (event) => {
  //   setSelectedAmount(event.target.value);
  //   if (event.target.value !== "custom") {
  //     setCustomAmount(""); // Clear custom amount when predefined is selected
  //   }
  // };

  // const handleCustomAmountChange = (event) => {
  //   setCustomAmount(event.target.value);
  //   setSelectedAmount("custom"); // Set the selected to custom when user inputs a value
  // };

  // const handleDonate = () => {
  //   const donationAmount =
  //     selectedAmount === "custom" ? customAmount : selectedAmount;
  //   console.log(`Donation amount: ${donationAmount}`);
  //   // Add your donation processing logic here
  // };

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
          >
            {/* <StyledButton bgc="#4ACA4D !important" mbSmall="2em !important">
              Faire un don
            </StyledButton> */}
            {/* <StyledButton ml="2em !important" mlSmall="0px !important">
              Voir les activites
            </StyledButton> */}
          </Stack>
        </Stack>
      </Banner>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: "0 5em", transform: "translateY(-150px)" }}
      >
        <ReusableGrid
          items={donates}
          backgroundColor="#4ACA4D"
          spacing={0}
          hideBorder={true}
          btnText="Faire un don"
          btnColor="#fff !important"
          txtColor="#000"
          isRounded={false}
          minHeight="300px"
        />
      </Stack>
      <Typography variant="h3" textAlign="center" sx={{ margin: "1em 0" }}>
        ONG SAVE VIGNON -- Ensemble relevons de grand defi
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ display: "flex", alignItems: "start", justifyContent: "center" }}
      >
        <Box>
          <Title text="Les Ceremonies" size="16px" />
          <Carousel items={eventCarousel} maxWidth="400px" />
        </Box>
        <Box sx={{ margin: "0 2em" }}>
          <VideoPlayer
            src="https://www.youtube.com/embed/nC1rHs2gHcA" // Replace with your video URL
            width="600px"
            height="400px"
            title="Société : l&#39;Ong Save-Vignon fait don de kits scolaires aux apprenants de Dandji"
          />
        </Box>
        <Box>
          <Title text="Les Evenements à venir" size="16px" />
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
        </Box>
      </Stack>

      <Stack
        data-aos="zoom-in-down"
        sx={{ background: "#fff", padding: "2em 3em" }}
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
      {/* <Box padding={4}>
        <Typography variant="h5" align="center" gutterBottom>
          Notre but aujourd'hui est d'atteindre 10,000$ pour les orphelins de
          [votre lieu ici]
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom={4}
        >
          <LinearProgress
            variant="determinate"
            value={60}
            style={{ width: "100%", maxWidth: "500px", height: "10px" }}
          />{" "}
        </Box>

        <Box display="flex" justifyContent="center" marginBottom={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RadioGroup value={selectedAmount} onChange={handleAmountChange}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        minHeight: "150px",
                      }}
                    >
                      <FormControlLabel
                        value="100"
                        control={<Radio />}
                        label="$100"
                        style={{ width: "100%" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        minHeight: "150px",
                      }}
                    >
                      <FormControlLabel
                        value="200"
                        control={<Radio />}
                        label="$200"
                        style={{ width: "100%" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        minHeight: "150px",
                      }}
                    >
                      <FormControlLabel
                        value="500"
                        control={<Radio />}
                        label="$500"
                        style={{ width: "100%" }}
                      />
                    </Paper>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        minHeight: "150px",
                      }}
                    >
                      <FormControlLabel
                        value="custom"
                        control={<Radio />}
                        label="Custom"
                        style={{ width: "100%" }}
                      />
                      {selectedAmount === "custom" && (
                        <TextField
                          fullWidth
                          label="Amount"
                          variant="outlined"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          style={{ marginTop: "8px" }}
                        />
                      )}
                    </Paper>
                  </Grid>
                </Grid>
              </RadioGroup>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleDonate}>
            Donate Now
          </Button>
        </Box>
      </Box> */}

      <Box sx={{ padding: "2em", marginBottom: "2em" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          marginBottom=".5em"
        >
          Nos Rapports d'Activités
        </Typography>
        <ReusableGrid items={reports} btnText="Voir" />
      </Box>
    </Stack>
  );
};

export default Home;
