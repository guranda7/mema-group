/*
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography } from "@mui/material";

const services = [
  { id: 1, name: "Plastering Under Putty (Concrete Standard)", price: 25 },
  { id: 2, name: "Plastering Under Putty (1 Layer)", price: 20 },
  { id: 3, name: "Stone Cladding (Maltakva)", price: 22 },
  { id: 4, name: "Reinforcement Mesh", price: 15 },
  { id: 5, name: "Stone Cutting", price: 8 },
  { id: 6, name: "Stone Coating", price: 0.5 },
  { id: 7, name: "Stone Coating with Smoke", price: 5 },
  { id: 8, name: "Morning Stone Coating", price: 25 },
  { id: 9, name: "Morning Stone Cutting", price: 10 },
  { id: 10, name: "Combination of Stone Cutting and Coating", price: 10 }
];

const HouseRepairCalculator = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const getTotalPrice = () => {
    return services.reduce((total, service) => {
      const quantity = parseFloat(quantities[service.id]) || 0;
      return total + quantity * service.price;
    }, 0).toFixed(2);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto", mt: 5 }}>
      <Typography variant="h5" align="center" sx={{ padding: 2, backgroundColor: "#607d8b", color: "#fff" }}>
        House Repair & Construction Cost Calculator
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
            <TableCell><strong>Service Name</strong></TableCell>
            <TableCell align="center"><strong>Unit</strong></TableCell>
            <TableCell align="center"><strong>Price (GEL)</strong></TableCell>
            <TableCell align="center"><strong>Quantity (m²)</strong></TableCell>
            <TableCell align="center"><strong>Total (GEL)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.name}</TableCell>
              <TableCell align="center">m²</TableCell>
              <TableCell align="center">{service.price.toFixed(2)}</TableCell>
              <TableCell align="center">
                <TextField
                  type="number"
                  variant="outlined"
                  size="small"
                  sx={{ width: 80 }}
                  onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                {(quantities[service.id] ? quantities[service.id] * service.price : 0).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: "#eeeeee" }}>
            <TableCell colSpan={4} align="right"><strong>Total Price:</strong></TableCell>
            <TableCell align="center"><strong>{getTotalPrice()} GEL</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HouseRepairCalculator;
*/ 

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const services = [
  { id: 1, name: "Plastering Under Putty (Concrete Standard)", price: 25 },
  { id: 2, name: "Plastering Under Putty (1 Layer)", price: 20 },
  { id: 3, name: "Stone Cladding (Maltakva)", price: 22 },
  { id: 4, name: "Reinforcement Mesh", price: 15 },
  { id: 5, name: "Stone Cutting", price: 8 },
  { id: 6, name: "Stone Coating", price: 0.5 },
  { id: 7, name: "Stone Coating with Smoke", price: 5 },
  { id: 8, name: "Morning Stone Coating", price: 25 },
  { id: 9, name: "Morning Stone Cutting", price: 10 },
  { id: 10, name: "Combination of Stone Cutting and Coating", price: 10 },
];

const HouseRepairCalculator = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const getTotalPrice = () => {
    return services
      .reduce((total, service) => {
        const quantity = parseFloat(quantities[service.id]) || 0;
        return total + quantity * service.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 900,
        margin: "50px auto", // Adds margin from footer
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          padding: 2,
          backgroundColor: "#2F4F4F",
          color: "#fff",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        House Repair & Construction Cost Calculator
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#8FBC8F" }}>
            <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
              Service Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>
              Unit
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>
              Price (GEL)
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>
              Quantity (m²)
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>
              Total (GEL)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service, index) => (
            <TableRow
              key={service.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#FFFFFF",
              }}
            >
              <TableCell>{service.name}</TableCell>
              <TableCell align="center">m²</TableCell>
              <TableCell align="center">{service.price.toFixed(2)}</TableCell>
              <TableCell align="center">
                <TextField
                  type="number"
                  variant="outlined"
                  size="small"
                  sx={{
                    width: 80,
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8FBC8F",
                      },
                      "&:hover fieldset": {
                        borderColor: "#2F4F4F",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#2F4F4F",
                      },
                    },
                  }}
                  onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                {(quantities[service.id]
                  ? quantities[service.id] * service.price
                  : 0
                ).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: "#696969", color: "#fff" }}>
            <TableCell colSpan={4} align="right">
              <strong style={{ color: "#fff" }}>Total Price:</strong>
            </TableCell>
            <TableCell align="center">
              <strong style={{ color: "#fff" }}>{getTotalPrice()} GEL</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HouseRepairCalculator;
