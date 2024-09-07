import { Paper, Stack } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";

const Presentation = () => {
  // Define the base title and the new title to append
  const baseTitle = "ONG SAVE VIGNON";
  const pageTitle = "Présentation | " + baseTitle;
  return (
    <Stack>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Banner height="345px">
        <Paper></Paper>
      </Banner>
    </Stack>
  );
};

export default Presentation;
