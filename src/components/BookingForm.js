import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@mui/material";

function BookingForm() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem("userBooking", JSON.stringify(formData));

    // Set the form as submitted
    setIsSubmitted(true);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: "auto", backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {t("bookText1")}
      </Typography>
      {isSubmitted ? (
        <Typography variant="body1" color="success.main">
          {t( "bookText2")}
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Your Phone"
            variant="outlined"
            name="phone"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{background: " #2F4F4F"}}>
            {t("submit")}
          </Button>
        </form>
      )}
    </Box>
  );
}

export default BookingForm;
