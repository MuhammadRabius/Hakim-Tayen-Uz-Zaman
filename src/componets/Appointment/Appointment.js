import React from 'react';
import './Appointment.css';

const Appointment = () => {
      return (
            <div className='appointment-container'>
                   <h1 className='text-center font-mono p-4'>Make Appointment NOW!</h1>
                  <div className='flex justify-center p-6 '>
                         <div className='w-75  p-4'>
                               <form class="row g-3">
                              <div class="col-md-6">
                              <label for="text" class="form-label">Name</label>
                              <input type="text" class="form-control" id="name" placeholder='Enter Your name'/>
                              </div>
                              <div class="col-md-6">
                              <label for="text" class="form-label">Email</label>
                              <input type="email" class="form-control" id="email"/>
                              </div>
                              <div class="col-12">
                              <label for="text" class="form-label">Mobile No</label>
                              <input type="text" class="form-control" id="inputAddress" placeholder="+8801111111111"/>
                              </div>
                              <div class="col-12">
                              <label for="inputAddress2" class="form-label">Appointment Date</label>
                              <input type="text" class="form-control" id="inputAddress2" placeholder="Please write appointment date"/>
                              </div>
                              <div class="col-12">
                              <label for="inputAddress2" class="form-label">Mention Your Problem</label>
                              <input type="text" class="form-control" id="inputAddress2" placeholder="Sessional Flue, Back Pain, or Sexual Disorder"/>
                              </div>
                              <div class="col-md-6">
                              <label for="inputCity" class="form-label">Address</label>
                              <input type="text" class="form-control" id="inputCity"/>
                              </div>
                              <div class="col-md-4">
                              <label for="inputState" class="form-label">Distract </label>
                              <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>Dhaka</option>
                                    <option>Chandpur</option>
                                    <option>Nowakhali</option>
                                    <option>Cumilla</option>
                                    <option>Madirapur</option>
                                    <option>Barisal</option>
                                    <option>Rajshahi</option>
                              </select>
                              </div>
                              
                              <div class="col-12">
                              <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                    Make Appointment
                                    </label>
                              </div>
                              </div>
                              <div class="col-12">
                              <button  type="submit" class="btn btn-primary">Submit</button>
                              </div>
                              </form>
                         </div>
               </div>
            </div>
      );
};

export default Appointment;