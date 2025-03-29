// import * as Grid2 from "@mui/material";
import { Box, Grid2, Typography } from "@mui/material";
import "../styles/Services.css";
import { useTranslation } from "react-i18next";

function Services() {
  const { t, i18n } = useTranslation();

  const cards = [
    {
      id: 1,
      title: t("cardTitle1"),
      description: t("cardText1"),
    },
    {
      id: 2,
      title: t("cardTitle2"),
      description: t("cardText2"),
    },
    {
      id: 3,
      title: t("cardTitle3"),
      description: t("cardText3"),
    },
  ];

  return (
    <Box sx={{ textAlign: "center", my: 4 }}> {/* Centering title */}
    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
      {t("services")}
    </Typography>

    <Grid2 container spacing={3}>
      {cards.map((item) => (
        
        <Grid2 key={item.id} item xs={12} sm={6} md={4} sx={{margin: " 20px auto"}}>
          
          <Box className="card">
            <Typography variant="h5" sx={{padding: "20px", fontFamily: "inherit", textAlign:"center" }}>{item.title}</Typography>
            <Typography sx={{fontFamily:"inherit", textAlign: "justify"}}>{item.description}</Typography>
          </Box>
        </Grid2>
      ))}
    </Grid2>
    </Box>
    
  );
}

export default Services;
