import React, { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
      const [email,setEmail]=useState();
      const [password,setPassword]=useState();

      const handleEmail =event=>{
            const email =event.target.value;
            setEmail(event.target.value);
            console.log(email);
      }
      const handPassword =(event)=>{
            const pass =event.target.value;
            setPassword(event.target.value);
            console.log(pass)
      }
      

      const handleSubmit=()=>{

      }
      return (
           <div className='login-container'>
                  <h1 className='text-center font-mono'>Please login</h1>


                  <div className='flex justify-center p-10 '>
                  
                   <Form onSubmit={handleSubmit} className='border-2 rounded-md p-4 text-2xl'>
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
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms,Conditions and Privacy Policy" />
                        </Form.Group>
                        <p className='flex items-center'>Create New Account?<Nav.Link as={Link} to='/register'>Register Now</Nav.Link></p>
                        <p className='flex items-center'>Forgot Password<Nav.Link as={Link} to='/register'>Reset Password</Nav.Link></p>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                  </Form>
            </div> 
           </div>
      );
};

export default Login;