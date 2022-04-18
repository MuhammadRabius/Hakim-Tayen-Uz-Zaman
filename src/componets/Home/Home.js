import React from 'react';
import KeyService from './KeyService/KeyService';
import Slider from './Slider/Slider';
import UnaniSection from './Unani/UnaniSection';


const Home = () => {
      return (
            <div>
                  {/* ------- Slider-------*/}
                 <Slider></Slider>
                 {/* Home-Service Section */}
                  <KeyService></KeyService>
                  {/* Unani Section */}
                  <UnaniSection/>
            </div>
                 
      )};

export default Home;