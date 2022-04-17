import React from 'react';
import KeyService from './KeyService/KeyService';
import Slider from './Slider/Slider';


const Home = () => {
      return (
            <div>
                  {/* ------- Slider-------*/}
                 <Slider></Slider>
                 {/* Home-Service Section */}
                  <KeyService></KeyService>
            </div>
                 
      )};

export default Home;