import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const HouseRepairCalculator2 = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantities, setQuantities] = useState({});

  const categories = {
    ceiling: [
    { id: 1, name: t('ceilingService1'), price: 25 },
    { id: 2, name: t('ceilingService2'), price: 20 },
    { id: 3, name: t('ceilingService3'), price: 20 },
    { id: 4, name: t('ceilingService4'), price: 15 },
    { id: 5, name: t('ceilingService5'), price: 8 },
    { id: 6, name: t('ceilingService6'), price: 0.5 },
    { id: 7, name: t('ceilingService7'), price: 5 },
    ],
    walls: [
    { id: 1, name: t('wallService1'), price: 25 },
    { id: 2, name: t('wallService2'), price: 20 },
    { id: 3, name: t('wallService3'), price: 20 },
    { id: 4, name: t('wallService4'), price: 15 },
    { id: 5, name: t('wallService5'), price: 8 },
    { id: 6, name: t('wallService6'), price: 0.5 },
    { id: 7, name: t('wallService7'), price: 5 },
    {id: 8, name:t('wallService8') , price: 28.00},
    {id: 7, name: t('wallService9'), price: 5 },
    {id: 7, name: t('wallService10'), price: 5 },
    {id: 7, name: t('wallService11'), price: 5 },
    {id: 7, name: t('wallService12'), price: 5 },
    ],
    floors: [
      { id: 7, name: t("floorService1"), price: 30 },
      { id: 8, name: t("floorService2"), price: 25 },
      { id: 7, name: t("floorService3"), price: 30 },
      { id: 8, name: t("floorService4"), price: 25 },

    ],
  };

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const getTotalPrice = () => {
    return (categories[selectedCategory] || [])
      .reduce((total, service) => {
        const quantity = parseFloat(quantities[service.id]) || 0;
        return total + quantity * service.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150ypx", marginBottom: "200px", Height: "100vh" }}>
      
      <FormControl fullWidth sx={{ maxWidth: 400, margin: "10px auto" }}>
        <InputLabel>{t("selectCategory")}</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="ceiling">{t("ceiling")}</MenuItem>
          <MenuItem value="walls">{t("wall")}</MenuItem>
          <MenuItem value="floors">{t("floor")}</MenuItem>
        </Select>
      </FormControl>

      {selectedCategory && (
        <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "20px auto" }}>
          <Typography variant="h5" align="center" sx={{ padding: 2, backgroundColor: "#2F4F4F", color: "#fff" }}>
            {t(selectedCategory)}
          </Typography>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#8FBC8F" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>{t("Service")}</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>{t("unit")}</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>{t("totalPrice")}</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>{t("quantity")}</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "#fff" }}>{t("totalPriceGel")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories[selectedCategory].map((service, index) => (
                <TableRow key={service.id} sx={{ backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#FFFFFF" }}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell align="center">{t('m2')}</TableCell>
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
              <TableRow sx={{ backgroundColor: "#696969", color: "#fff" }}>
                <TableCell colSpan={4} align="right">
                  <strong style={{ color: "#fff" }}>{t('totalPrice')}</strong>
                </TableCell>
                <TableCell align="center">
                  <strong style={{ color: "#fff" }}>{getTotalPrice()} GEL</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
    
  );
};

export default HouseRepairCalculator2;
