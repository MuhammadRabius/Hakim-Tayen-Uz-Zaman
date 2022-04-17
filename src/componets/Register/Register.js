import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Nav } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const Register = () => {
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [confirmPassword,SetConfirmPassowrd]=useState('');
      const [error,setError]=useState('');
      const navigate =useNavigate();
       const [
            createUserWithEmailAndPassword,
            user,
            loading,

       ] = useCreateUserWithEmailAndPassword(auth);

      const handleEmail =event=>{
            
            setEmail(event.target.value);
            
      }
      const handPassword =(event)=>{
            
            setPassword(event.target.value);
            
      }

      const handleConfirmPassword=(event)=>{
            SetConfirmPassowrd(event.target.value);
      }

       
      

      const handleRegisterSubmit=(event)=>{
            event.preventDefault();
            if(password !==confirmPassword){
                  setError('Password MisMatch')
                  return;
            }
            if(password.length<6){
                  setError('Your Password Must be upto Six Digit');
                  return;
            }

            createUserWithEmailAndPassword(email,password);
            navigate('/login')
          

      }
      return (
            <div className='register-container'>
                  <h1 className='text-center font-mono'>Register Now!</h1>


                  <div className='flex justify-center p-10 w-full'>
                  
                   <Form onSubmit={handleRegisterSubmit} className='border-2 rounded-md p-4 text-2xl'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter your email" required />
                        <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handPassword} type="password" placeholder="Password" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-write Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Re-write Password" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms,Conditions and Privacy Policy" />
                        </Form.Group>
                        <p>{error?.message}</p>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                  </Form>
            </div> 
           </div>
      );
};

export default Register;