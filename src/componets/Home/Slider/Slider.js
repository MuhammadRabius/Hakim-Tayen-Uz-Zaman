import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstBanner from '../../../images/Home-banner-1.png';
import secondBanner from '../../../images/Home-banner-2.png';
import thirdBanner from '../../../images/Home-banner-3.png';

const Slider = () => {
      return (
            <div>
                   <Carousel>
                        <Carousel.Item interval={1000}>
                        <img
                              className="d-block w-100"
                              src={firstBanner}
                              alt="First slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                        <img
                              className="d-block w-100"
                              src={secondBanner}
                              alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={thirdBanner}
                              alt="Third slide"
                        />
                        
                        </Carousel.Item>
                        </Carousel>
            </div>
      );
};

export default Slider;