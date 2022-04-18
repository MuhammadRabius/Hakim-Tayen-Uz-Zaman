import React from 'react';
import generaldeptImg from '../../../images/service-1.jpg';
import arthristisdeptImg from '../../../images/service-2.jpg';
import sexualdeptImg from '../../../images/service-3.jpg';
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const DepartmentSerice = () => {

      const navigate = useNavigate();
      const handleappointment=()=>{
            navigate('/appointment');
      }
      return (
            <div>
                  <div className="Medicine-Department">
                       <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 my-8">
                             <div>
                                   <img className=' border-0 rounded-lg ml-16' src={generaldeptImg } alt="" />
                             </div>
                             <div className='text-center p-12'>
                              <h3>About Sessional Flue</h3>
                              <p className='text-2xl p-10'>Seasonal influenza/flu is usually a mild respiratory disease and self limiting. Uncomplicated
                              influenza illness typically resolves after 3—7 days for the majority of persons, although cough
                              and malaise can persist for >2 weeks. However, in high risk group a very few people, influenza
                              virus infections can cause primary influenza viral pneumonia; exacerbate underlying medical
                              conditions, lead to secondary bacterial pneumonia, sinusitis, or otitis media; or contribute to
                              coinfections with other viral or bacterial pathogens and may need hospitalization. </p>
                                   
                                   <button onClick={handleappointment} className='border-2 rounded-lg p-3 mx-2 text-black hover:bg-blue-400'>Make Appointment</button>
                             </div>
                       </div>

                  </div>
                  <div className="Arthristis-Department">
                       <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 my-8">
                              <div className='text-center p-12'>
                               <h3>Medicine for this Arthritis/Rheumatologist Department</h3>
                                                                  
                                   <p className='text-2xl p-10'>Rheumatology studies the causes, impact, and treatments of inflammatory autoimmune disorders on the human body. In an autoimmune disorder, a patient’s own immune system malfunctions and turns its attack on his own healthy body tissue, rather than on invading or external disease agents. <br />
                                    Rheumatologists can be internists or pediatricians who have additional training and qualifications.  They have the experience to diagnose and treat many of the over 100 systemic forms of adult, juvenile, and temporal arthritis.  They treat mechanical joint, bone, muscle, and soft and connective tissue diseases.</p>
                                  
                                   <button onClick={handleappointment} className='border-2 rounded-lg p-3 mx-2 text-black hover:bg-blue-400'>Make Appointment</button>
                             </div>
                             <div>
                                   <img className=' border-0 rounded-lg ml-16' src={arthristisdeptImg} alt="" />
                             </div>
                             
                       </div>

                  </div>
                  <div className="SexualDermatologist">
                         <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 my-8">
                             <div>
                                   <img className=' border-0 rounded-lg lg:ml-16' src={sexualdeptImg} alt="" />
                             </div>
                             <div className='text-center lg:p-12'>
                                   <h3>Sexual Dermatologist Department</h3>
                                                                     
                                   <p className='text-2xl lg:p-10'>A dermatologist is responsible for the detection and treatment of skin- and sexually transmitted diseases. The dermatologist is dedicated to delivering preventive care, follow-up care and rehabilitation with regard to diseases afflicting the skin, mucous membranes and skin appendages – such as nails and hair. Some dermatologists go on to specialise further and become phlebologists (vein doctors).</p>
                                   
                                   <button onClick={handleappointment} className='border-2 rounded-lg p-3 mx-2 text-black hover:bg-blue-400'>Make Appointment</button>
                             </div>
                       </div>

                  </div>
            </div>
      );
};

export default DepartmentSerice;