import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Phone, Email, Place } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link from React Router

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Calculator", path: "/calculator" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box sx={{ backgroundColor: "#5D5353", color: "#fff", py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#A4C2A8" }}>
              MEMA <span style={{ fontWeight: "100", fontSize: "13px", color: "white" }}>Group</span>
            </Typography>
            <Typography variant="body2">Trust your home professionals.</Typography>
            <Box mt={1}>
              <IconButton sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Phone />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Email />
              </IconButton>
            </Box>
          </Grid>

          {/* Middle Section - Navigation */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Navigation</Typography>
            {navItems.map((item) => (
              <Typography key={item.name} variant="body2">
                <Link to={item.path} style={{ color: "inherit", textDecoration: "none" }}>
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Right Section - Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Contact</Typography>
            <Typography variant="body2">
              <Place sx={{ verticalAlign: "middle", mr: 1 }} />
              <b>Tbilisi, Georgia St. Barbare settlement</b>
            </Typography>
            <Typography variant="body2">
              <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
              +995 597 92 69 69
            </Typography>
            <Typography variant="body2">
              <Email sx={{ verticalAlign: "middle", mr: 1 }} />
              info@memagroup.ge
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box mt={3} textAlign="center">
          <Typography variant="body2">© All rights reserved 2025</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
