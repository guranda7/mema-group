import { useState } from "react";
import { TextField, Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function CustomInput() {
  const { t, i18n } = useTranslation();

  

  const [showLinks, setShowLinks] = useState(false);

  const handleFocus = () => {
    setShowLinks(true);
  };

  const handleBlur = () => {
    // Delay hiding to allow clicking a link
    setTimeout(() => setShowLinks(false), 200);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <TextField
        variant="outlined"
        placeholder={t("inputQuestion")}
        onFocus={handleFocus}
        onBlur={handleBlur}
        sx={{
          width: "300px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
            "& input": { color: "#333" },
          },
        }}
      />

      {showLinks && (
        <List
          sx={{
            position: "absolute",
            top: "100%", // Position below the input
            left: 0,
            width: "100%",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
          }}
        >
          <ListItem button component={Link} to="/">
            <ListItemText primary={t("home")} sx={{ color: "#696969" }}/>
          </ListItem>
          <ListItem button component={Link} to="/services">
            <ListItemText primary={t("services")} sx={{ color: "#696969" }}/>
          </ListItem>
          <ListItem button component={Link} to="/about-us">
            <ListItemText primary={t("aboutUs")} sx={{ color: "#696969" }}/>
          </ListItem>
          <ListItem button component={Link} to="/calculator">
            <ListItemText primary={t("calculator")} sx={{ color: "#696969" }}/>
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary={t("contactUs")} sx={{ color: "#696969" }} />
          </ListItem>
        </List>
      )}
    </Box>
  );
}

export default CustomInput;
