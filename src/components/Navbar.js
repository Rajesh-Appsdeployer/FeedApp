import React from "react";
import { Container,Nav,Navbar,Offcanvas  } from "react-bootstrap";
import '../Css/Navbar.css';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
 
import NotificationsIcon from '@mui/icons-material/Notifications';

function OffcanvasExample() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  

  const isMenuOpen = Boolean(anchorEl);
  

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} sticky="top"   expand={expand} className='head1'  >
          <Container fluid>
            <Navbar.Brand href="#" className="title">The School</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggel' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='Header'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                The School
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="Bodyof">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  className="text"><Link className="text1" to='/'>Home</Link></Nav.Link>
                  <Nav.Link  className="text"><Link className="text1" to='/post'>Post Blog </Link></Nav.Link>
                  <Nav.Link  className="text"> <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge></Nav.Link>
                  <Nav.Link  className="text"> <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge></Nav.Link>
                   <Nav.Link  className="text" onClick={handleProfileMenuOpen}> <AccountCircle /></Nav.Link>
                </Nav>
                 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          {renderMenu}
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;