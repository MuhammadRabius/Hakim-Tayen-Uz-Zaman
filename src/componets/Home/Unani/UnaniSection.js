import React from 'react';
import UnaniImg from '../../../images/why-unani.jpg'

const UnaniSection = () => {
      return (
            <div className='grid lg:grid-cols-2 p-4 mt-10 mb-6 bg-slate-100'>
                 <div>
                       <img className='w-full rounded-xl' src={UnaniImg} alt="" />
                  </div> 

                  <div className='p-4 text-center mt-2'>
                        <h2 className='font-semibold text-5xl italic p-4'>Take Unani medicines seriously! </h2>
                        <p className='text-2xl font-extralight'>The Unani System of Medicine offers treatment of diseases related to all the systems and organs of the human body. The treatments for chronic ailments and diseases of skin, liver, musculo-skeletal and reproductive systems, immunological and lifestyle disorders have been found to be highly effective and acceptable. The use of elatives, exhilarants, aphrodisiacs, organ-specific tonics and immunomodulatory drugs, temperament specific drugs, correctives for adverse effects, coctives and purgatives etc. are unique features of Unani System of Medicine. Cosmoceutics, Nutraceutics, Aromatics and corresponding therapies are important parts of treatment in Unani System of Medicine.</p>
                  </div>
            </div>
      );
};

export default UnaniSection;