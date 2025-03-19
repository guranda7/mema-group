import { TextField, Box } from "@mui/material";

function CustomInput() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        backgroundSize: "cover",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="How can we help?"
        sx={{
          width: "300px", // Adjust width as needed
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
          borderRadius: "20px", // Rounded corners
          backdropFilter: "blur(10px)", // Blur effect
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" }, // Remove default border
            "& input": { color: "#333" }, // Adjust text color
          },
        }}
      />
    </Box>
  );
}

export default CustomInput;
