import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image8.jpg";
import image10 from "../images/image10.jpg";
import { t } from "i18next";
import ImageViewerModal from "../components/ImageModal";
// Sample data for projects

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const projects = [
    {
      id: 1,
      name: t("galleryTitle1"),
      description: t("galleryDescription1"),
      headerImage: image2,
      images: [image1, image2, image3, image4],
    },
    {
      id: 2,
      name: t("galleryTitle2"),
      description: t("galleryDescription2"),
      headerImage: image5,
      images: [image6, image7, image5],
    },
    {
      id: 3,
      name: t("galleryTitle3"),
      description: t("galleryDescription3"),
      headerImage: image9,
      images: [image8, image9, image10],
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const handleOpen = (images) => {
    setSelectedImages(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImages([]);
  };

  const handlePreviewImage = (imageUrl) => {};

  return (
    <Box sx={{ padding: "50px 5%", backgroundColor: "#F5F5F5" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {projects.map((project) => (
          <Box
            key={project.id}
            sx={{
              width: "30%",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              backgroundColor: "white",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => handleOpen(project.images)}
          >
            <img
              src={project.headerImage}
              alt={project.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Box sx={{ padding: "15px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#757575" }}>
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Modal for Enlarged View */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            boxShadow: 24,
            p: 2,
            maxWidth: "80%",
            maxHeight: "80%",
            overflow: "auto",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {selectedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`project-media-${index}`}
                style={{
                  width: "calc(33.33% - 10px)",
                  height: "auto",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  setImageUrl(src);
                }}
              />
            ))}
          </Box>
        </Box>
      </Modal>
      <ImageViewerModal open={imageUrl} onClose={() => setImageUrl(null)} imageUrl={imageUrl}/>
    </Box>
  );
};

export default Gallery;
