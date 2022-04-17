import React from 'react';
import generaldeptImg from '../../../images/service-1.jpg';
import arthristisdeptImg from '../../../images/service-2.jpg';
import sexualdeptImg from '../../../images/service-3.jpg';
import { FaAngleDoubleRight } from "react-icons/fa";

const DepartmentSerice = () => {
      return (
            <div>
                  <div className="Medicine-Department">
                       <div className="grid grid-cols-2 m-10 p-6">
                             <div>
                                   <img className=' border-0 rounded-lg ml-16' src={generaldeptImg } alt="" />
                             </div>
                             <div className='text-center'>
                                   <h3>Medicine for this Sessional Flue</h3>
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   
                             </div>
                       </div>

                  </div>
                  <div className="Arthristis-Department">
                        <div className="grid grid-cols-2 m-10 p-6">
                              <div className='text-center'>
                               <h3>Medicine for this Arthristis Department</h3>
                               
                                   
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   <p className='text-3xl'>SP-NISHAT</p>
                              
                             </div>
                             <div>
                                   <img className=' border-0 rounded-lg ml-16' src={arthristisdeptImg} alt="" />
                             </div>
                             
                       </div>

                  </div>
                  <div className="SexualDermatologist">
                        <div className="grid grid-cols-2 m-10 p-6">
                             <div>
                                   <img className=' border-0 rounded-lg ml-16' src={sexualdeptImg} alt="" />
                             </div>
                             <div className='text-center'>
                                   <h3>Medicine for this area</h3>
                                  
                                    
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   <p className='text-3xl'>SP-NISHAT</p>
                                   <p className='text-3xl'>SP-NISHAT</p>
                             
                             </div>
                       </div>

                  </div>
            </div>
      );
};

export default DepartmentSerice;