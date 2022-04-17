import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" className='text-black hover:text-blue-700 bg-lime-50 '>
                   <Container className='gap-10 p-6 fs-5 '>
                   <Navbar.Brand as={Link} to='/' className='fs-3'>Hakim Tayen Uz-Zaman</Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto gap-4 ">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/aboutme'>About Me</Nav.Link>
                        </Nav>
                        
                        
                        <Nav.Link as={Link} to='/'>Make Appointment</Nav.Link>
                        
                       
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
            </div>
      );
};

export default Header;