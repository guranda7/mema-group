import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../images/grey-sofa.jpg";
import "../styles/AboutUsSection.css";

function AboutUsSection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, }}>
            {t("aboutUsTitle")}
          </Typography>
          <Typography variant="body1" color="text.secondary" font sx={{ mb: 3 }}>
            {t("aboutDescription")}
          </Typography>
          <Button
            component={Link}
            to="/about-us"
            variant="contained"
            sx={{ backgroundColor: "#4A4A4A", // Dark gray color
                color: "white",
                borderRadius: "30px", // Rounded corners
                padding: "10px 20px",
                fontSize: "16px",
                textTransform: "none",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#333333", // Darker shade on hover
                  transform: "scale(1.05)",}
                }}
          >
            {t("seeMore")}
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={image}
            alt="Sofa"
            sx={{
              width: "100%",
              maxHeight: 400,
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsSection;
