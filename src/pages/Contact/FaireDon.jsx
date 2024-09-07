import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledButton } from "../../misc/component";

const FaireDon = () => {
  const [alignment, setAlignment] = React.useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Stack direction="column" sx={{ background: "#84A7A1", padding: "3em" }}>
      <Typography
        fontSize={{ xs: "32px", md: "54px" }}
        fontFamily="Josefin Sans, sans-serif"
        sx={{ marginBottom: ".6em", textAlign: "center", color: "#fff" }}
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
        <StyledButton bgc="#4ACA4D !important" sx={{ width: "100%" }}>
          Envoyer
        </StyledButton>
      </Box>
    </Stack>
  );
};

export default FaireDon;
