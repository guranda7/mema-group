import React, { useState } from 'react';
import '../styles/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className = "container-navbar">
            <div className = "first-navbar">
                <div className="col-1">
                    <Link to="/about-us" ><span className="about-us">About us</span></Link>
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

                    <span><svg xmlns="http://www.w3.org/2000/svg" width = "20px"fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    </span>                    
                    <span>
                        <a href="mailto:your@email.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: "#696969" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                    </span>
                                            <span className="enter-feature">Log in</span>
                    <span className="enter-feature">Sign up</span>
                </div>
                <div className = "col-2">
                   <span><svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    </span>
                    <span>Tbilisi, Georgia St. Barbare sattlemant  </span>
                </div>
            </div>
            <div className = "second-navbar">
            <div className="col-2-1">
                <Link to="/" className="nav-link" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="mema">MEMA</span>
                    <span className="group">Group</span>
                </Link>
                </div>


                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={toggleMenu} 
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>


                <Drawer
                    anchor="left"
                    open={isMenuOpen}
                    onClose={toggleMenu}
                    ModalProps={{
                        keepMounted: true, // Prevents the entire page from re-rendering
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { width: 250 }, // Ensures drawer has width but doesn't mess with layout
                    }}
                >
                    <List >
                        <ListItem button component={Link} to="/" onClick={toggleMenu}>
                        <ListItemText primary="Home" 
                            sx={{ color:"#696969" }}
                        />
                        </ListItem>
                        <ListItem button component={Link} to="/services" onClick={toggleMenu}>
                        <ListItemText primary="Services" 
                            sx={{ color:"#696969" }}
                        />
                        </ListItem>
                        
                        <ListItem button component={Link} to="/gallery" onClick={toggleMenu}>
                        <ListItemText primary="Gallery" 
                            sx={{ color:"#696969" }}
                        />
                        </ListItem>
                        <ListItem button component={Link} to="/blog" onClick={toggleMenu}>
                        <ListItemText primary="Blog"
                            sx={{ color:"#696969" }}
                        />
                        </ListItem>
                        <ListItem button component={Link} to="/contact" onClick={toggleMenu}>
                        <ListItemText primary="Contact"
                             sx={{ color:"#696969" }}
                        />
                        </ListItem>
                        <ListItem button component={Link} to="/calculator" onClick={toggleMenu}>
                        <ListItemText primary="Calculator" 
                             sx={{ color:"#696969" }}
                        />
                        </ListItem>
                    </List>
                </Drawer>

                <div className="col-2-2">
                <Link to="/" className="nav-link">Home</Link> {/* Link to Home page */}
                <Link to="/services" className="nav-link">Services</Link> {/* Link to Services page */}
                <Link to="/calculator" className="nav-link">Calculator</Link>
                <Link to="/gallery" className="nav-link">Gallery</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;