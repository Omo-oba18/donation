import React, { useState } from "react";
import {
  Stack,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { StyledButton } from "../misc/component";

const DonationModalContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    cvc: "",
    nameOnCard: "",
  });

  const [selectedAmount, setSelectedAmount] = useState(10); // Default to $10
  const [customAmount, setCustomAmount] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setSelectedAmount(value === "custom" ? "custom" : Number(value));
    if (value !== "custom") setCustomAmount(""); // Clear custom amount if predefined is selected
  };

  const handleSubmit = () => {
    const donationAmount =
      selectedAmount === "custom" ? customAmount : selectedAmount;
    console.log("Form data:", formData);
    console.log("Selected donation amount:", donationAmount);
    // Add logic to handle donation processing
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Select Donation Amount</Typography>

      <RadioGroup
        aria-label="donation-amount"
        value={selectedAmount}
        onChange={handleAmountChange}
        row
      >
        {[10, 25, 75, 250].map((amount) => (
          <FormControlLabel
            key={amount}
            value={amount}
            control={<Radio />}
            label={`$${amount}`}
          />
        ))}
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label="Custom amount"
        />
      </RadioGroup>

      {/* Custom Amount Input */}
      {selectedAmount === "custom" && (
        <TextField
          label="Enter Custom Amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          fullWidth
          type="number"
        />
      )}

      {/* User Information */}
      <TextField
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
      />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          label="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="CVC"
          name="cvc"
          value={formData.cvc}
          onChange={handleInputChange}
          fullWidth
        />
      </Stack>

      <TextField
        label="Name on Card"
        name="nameOnCard"
        value={formData.nameOnCard}
        onChange={handleInputChange}
        fullWidth
      />

      {/* Donate Button */}
      <StyledButton bgc="#4ACA4D !important" onClick={handleSubmit}>
        Donate ${customAmount || selectedAmount}
      </StyledButton>
    </Stack>
  );
};

export default DonationModalContent;
