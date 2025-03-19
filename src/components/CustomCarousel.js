import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import image1 from '../images/grey-sofa.jpg'
import image2 from '../images/home-picture.jpg'
import image3 from '../images/pink-sofa.jpg'

const images = [
 image1, image2, image3
];

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 1, mb: 3 }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: "100%", // Ensures full width inside the container
                height: "500px", // Set a fixed height
                objectFit: "cover", // Ensures images fill the area without distortion
                
                
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
