import React from 'react';
import Profile from '../../images/Hakim-Banner.jpg'

const AboutMe = () => {
      return (
            <div className='grid grid-cols-2 p-10 '>
                  <div>
                        <img className='w-75 border-0 rounded-xl' src={Profile} alt="" />
                  </div>

                        <div className='text-2xl mt-14 font-extralight'>
                           <h2>Tayen Uz-Zaman</h2>
                           <p>
                                    HAKIM,UNANI <br />
                                    Head of Sexual Medicine Unit & <br />
                                    Consultant Dermatologist <br />
                                    SPLAB. 
                           </p>
                              <h3>For Me ,Life is..</h3>
                              <p> Of-course medicine encompass the relief of pain and suffering, the promotion of health and the prevention of disease, the forestalling of death and the promoting of a peaceful death, and the cure of disease when possible and the care of those who can not be cured.</p>
                        </div>
             </div>
      
      );
};

export default AboutMe;