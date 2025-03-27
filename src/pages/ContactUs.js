import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Stack, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Email, Phone } from "@mui/icons-material";
function ContactUs() {

  const { t, i18n } = useTranslation();
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4, marginBottom: "190px"}}>
      <Typography variant="h4" gutterBottom>
        {t('contactUs')}
      </Typography>
      
      <Stack spacing={2} alignItems="center">
        {/* Email */}
        <Link href="mailto:your-email@example.com" underline="hover" color="inherit">
          <IconButton color="primary">
            <Email />
          </IconButton>
          memagroup@info.ge
        </Link>

        {/* Phone */}
        <Link href="tel:+1234567890" underline="hover" color="inherit">
          <IconButton color="primary">
            <Phone />
          </IconButton>
          +995 597 92 69 69
        </Link>

        {/* Social Media Links */}
        <Stack direction="row" spacing={2}>
          <IconButton component="a" href="https://www.facebook.com/yourprofile" target="_blank" color="primary"
            sx={{color: "#696969"}}
            >
            <Facebook />
          </IconButton>

          <IconButton component="a" href="https://www.instagram.com/yourprofile" target="_blank" color="error"
            sx={{color: "#696969"}}
            >
            <Instagram />
          </IconButton>

          <IconButton component="a" href="https://www.linkedin.com/in/yourprofile" target="_blank" color="primary"
            sx={{color: "#696969"}}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ContactUs;
