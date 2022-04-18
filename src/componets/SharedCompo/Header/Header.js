import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';




const Header = () => {

      const navigate =useNavigate();
      const handleAppointment =()=>{
            navigate('/appointment');
      };
      const [user]=useAuthState(auth);
    
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" className='text-black hover:text-blue-700 bg-white-500 '>
                   <Container className='gap-10 p-6 fs-5 '>
                   <Navbar.Brand as={Link} to='/' className='fs-3'>Hakim Tayen Uz-Zaman</Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto gap-4 ">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link onClick={handleAppointment} as={Link} to='/appointment'>Appointment</Nav.Link>
                        <Nav.Link as={Link} to='/aboutme'>About Me</Nav.Link>
                        </Nav>
                        
                        
                        {
                              user?
                              <button onClick={()=>signOut(auth)} className='border-2 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 '>Sing Out</button>
                              :
                              <Nav.Link className='border-2 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 ' as={Link} to='/login'>Login</Nav.Link>
                        }
                        
                       
                        
                       
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
            </div>
      );
};

export default Header;