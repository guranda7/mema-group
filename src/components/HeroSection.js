import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../styles/HeroSection.css'
import CustomInput from './CustomInput';
import { Button } from "@mui/material";
import BookingForm from './BookingForm';

function HeroSection() {
  const { t } = useTranslation(); // Access translation function

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };


  return (
    <div className="hero-container">
      <CustomInput />
      <div className="subtitle">
        <p>{t('heroSubtitle')}</p>  {/* Translates dynamically */}
      </div>
      
      <Button variant="contained" onClick={toggleForm} sx={{background: " #2F4F4F"}}>
        {t("bookNow")}
      </Button>

      {showForm && <BookingForm />}
    
    </div>
  );
}

export default HeroSection;
