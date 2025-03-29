import { createTheme } from "@mui/material/styles";

const theme = (language) =>
  createTheme({
    typography: {
      fontFamily: language === "ka" ? "'Noto Sans Georgian', sans-serif" : "Roboto, sans-serif", // Set the correct font based on language
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: language === "ka" ? "'Noto Sans Georgian', sans-serif" : "Roboto, sans-serif", // Apply font to all Typography components
          },
        },
      },
    },
  });

export default theme;
