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
                    <span>About us</span>
                    <span><FontAwesomeIcon icon={faFacebook} size="lg" /></span>
                    <span><FontAwesomeIcon icon={faInstagram} size="lg" /></span>
                    <span><FontAwesomeIcon icon={faLinkedin} size="lg"/></span>

                    <span><svg xmlns="http://www.w3.org/2000/svg" width = "20px"fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    </span>                    
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20px"fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
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
                    <span className="mema">MEMA</span>
                    <span className="group">Group</span>
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
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                    }}
                >
                    <List>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Price" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Gallery" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Blog" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>

                <div className="col-2-2">
                <Link to="/" className="nav-link">Home</Link> {/* Link to Home page */}
                <Link to="/services" className="nav-link">Services</Link> {/* Link to Services page */}
                    <span>Price</span>
                    <span>Gallery</span>
                    <span>Blog</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;