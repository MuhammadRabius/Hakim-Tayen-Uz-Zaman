import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import generalMedImg from '../../../images/Card-1.jpg';
import arthristisMedImg from '../../../images/Card-2.jpg';
import sexualdremaMedImg from '../../../images/Card-3.jpg';

const KeyService = () => {
      return (
            <div className='bg-stone-100'>
                  <div className='text-center p-10'>
                        <p className='text-2xl'>The Best Medical And General Practice Care!</p>
                        <h1 className='text-5xl'>Providing Natural Medical Care <br /> For The Sickest In Our Community.
                        </h1>
                  </div>

                  <div className='p-5'>
                        <CardGroup className='gap-3 '>
                              <Card>
                              <Card.Img className='w-75 ' variant="top" src={generalMedImg} />
                              <Card.Body>
                                    <Card.Title className='fs-1'>General Medicine</Card.Title>
                                    <Card.Text>
                                    People Suffering from various sessional Flues.
                                    </Card.Text>
                              </Card.Body>
                             
                              </Card>
                              <Card>
                              <Card.Img className='w-75 ' variant="top" src={arthristisMedImg} />
                              <Card.Body>
                                    <Card.Title className='fs-1'>Arthristis</Card.Title>
                                    <Card.Text>
                                    This is very common in these era of our time.{' '}
                                    </Card.Text>
                              </Card.Body>
                              
                              </Card>
                              <Card>
                              <Card.Img className='w-75 ' variant="top" src={sexualdremaMedImg} />
                              <Card.Body>
                                    <Card.Title className='fs-1'>Sexual Dermatologist</Card.Title>
                                    <Card.Text>
                                    This is very common in these era of our time.
                                    </Card.Text>
                              </Card.Body>
                              
                              </Card>
                              </CardGroup>
                  </div>
            </div>
      );
};

export default KeyService;