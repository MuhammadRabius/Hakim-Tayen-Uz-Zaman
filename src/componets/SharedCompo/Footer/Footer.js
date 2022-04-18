import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillPhone,AiTwotoneHome,AiFillEnvironment,AiOutlineFieldTime,AiOutlineCopyright } from "react-icons/ai";


const Footer = () => {
      
      return (
            <div className='bg-blue-500 p-24'>
                  <div className='grid grid-cols-3 gap-32'>
                        <div className='text-white text-2xl font-serif'>
                              <p className='text-3xl'>Hakim Tayen Uz-Zaman</p>
                               <p className='flex items-center gap-2'> <AiTwotoneHome/>Chamber: SPLAB</p>
                              <p className='flex items-center gap-2'> <AiFillEnvironment/>Location: BSSIC Shilpa Nogory Chandpur</p>
                              <p className='flex items-center gap-2'> <AiFillPhone/> +8802568</p>
                        </div>

                        <div className='text-white font-serif text-center text-1xl'>
                              <h3>Useful Link</h3>
                              <Nav.Link className='text-white' as={Link} to='/' >Home</Nav.Link>
                              <Nav.Link className='text-white' as={Link} to='/services'>Services</Nav.Link>
                               <Nav.Link className='text-white' as={Link} to='/appointment'>Appointment</Nav.Link>
                              <Nav.Link className='text-white' as={Link} to='/aboutme'>About Me</Nav.Link>
                             

                        </div>
                        <div className='text-white font-serif text-center text-1xl'>
                              <h3>Hakim Schedule</h3>
                              
                              <div className='mt-8'>
                              <p className='flex items-center gap-2'> <AiOutlineFieldTime/>Monday to Thursday: From 10AM to 5PM</p>
                              <p className='flex items-center gap-2'> <AiOutlineFieldTime/> Saturday to Sunday: From 12PM to 3PM</p>
                              <p className='flex items-center gap-2'> <AiOutlineFieldTime/> Friday: From 5PM to 8PM</p>
                              </div>
                              
                        </div>
                  </div>
                  <h4 className='flex justify-center items-center gap-2 text-white font-serif mt-4'>All <AiOutlineCopyright/> 2022 Received by Muhammad Rabius</h4>
            </div>
      );
};

export default Footer;