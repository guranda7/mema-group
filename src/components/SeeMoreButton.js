import { Button } from "@mui/material";

function SeeMoreButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#4A4A4A", // Dark gray color
        color: "white",
        borderRadius: "30px", // Rounded corners
        padding: "10px 20px",
        fontSize: "16px",
        textTransform: "none",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#333333", // Darker shade on hover
          transform: "scale(1.05)", // Slight zoom effect
        },
      }}
    >
      See More
    </Button>
  );
}

export default SeeMoreButton;
