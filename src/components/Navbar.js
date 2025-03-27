import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="container-navbar">
            <div className="first-navbar">
                <div className="col-1">
                    <Link to="/about-us"><span className="about-us">{t('aboutUs')}</span></Link>
                    <span>
                        <a href="https://www.facebook.com/profile.php?id=100063491951873" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#696969" }} />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#696969" }} />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#696969" }} />
                        </a>
                    </span>

                    {/* Language Switcher Buttons */}
                    <div className="language-switcher">
                     <Button variant="contained" onClick={() => changeLanguage("en")} 
                     
                     sx={{ marginRight: 1,
                        fontSize: '0.7rem', // Adjust font size
                        padding: '2px 6px', // Adjust padding for smaller button
                        backgroundColor: '#696969', // Custom background color
                        color: '#fff', // Text color
                        '&:hover': {
                          backgroundColor: ' #2F4F4F', // Hover background color
                        },}}>
                            EN
                        </Button>
                        <Button variant="contained" size="small"onClick={() => changeLanguage("ka")}sx={{ marginRight: 1,
                        fontSize: '0.7rem', // Adjust font size
                        padding: '2px 6px', // Adjust padding for smaller button
                        backgroundColor: '#696969', // Custom background color
                        color: '#fff', // Text color
                        '&:hover': {
                          backgroundColor: ' #2F4F4F', // Hover background color
                        },}}
                            >
                            KA
                        </Button>
                    </div>
                </div>
                <div className="col-2">
                <LocationOnIcon sx={{ color: "#696969", marginRight: "5px" }} />
                    <span>{t('locationName')}</span>
                </div>
            </div>

            <div className="second-navbar">
                <div className="col-2-1">
                    <Link to="/" className="nav-link" style={{ textDecoration: "none", color: "inherit" }}>
                        <span className="mema">MEMA</span>
                        <span className="group">Group</span>
                    </Link>
                </div>

                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={isMenuOpen}
                    onClose={toggleMenu}
                    ModalProps={{ keepMounted: true }}
                    sx={{ '& .MuiDrawer-paper': { width: 250 } }}
                >
                    <List>
                        <ListItem button component={Link} to="/" onClick={toggleMenu}>
                            <ListItemText primary={t('home')} sx={{ color: "#696969" }} />
                        </ListItem>
                        <ListItem button component={Link} to="/services" onClick={toggleMenu}>
                            <ListItemText primary={t('services')} sx={{ color: "#696969" }} />
                        </ListItem>
                        <ListItem button component={Link} to="/gallery" onClick={toggleMenu}>
                            <ListItemText primary={t('gallery')} sx={{ color: "#696969" }} />
                        </ListItem>
                        <ListItem button component={Link} to="/contact" onClick={toggleMenu}>
                            <ListItemText primary={t('contactUs')} sx={{ color: "#696969" }} />
                        </ListItem>
                        <ListItem button component={Link} to="/calculator" onClick={toggleMenu}>
                            <ListItemText primary={t('calculator')} sx={{ color: "#696969" }} />
                        </ListItem>
                    </List>
                </Drawer>

                <div className="col-2-2">
                    <Link to="/" className="nav-link">{t('home')}</Link>
                    <Link to="/services" className="nav-link">{t('services')}</Link>
                    <Link to="/calculator" className="nav-link">{t('calculator')}</Link>
                    <Link to="/gallery" className="nav-link">{t('gallery')}</Link>
                    <Link to="/contact" className="nav-link">{t('contactUs')}</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
