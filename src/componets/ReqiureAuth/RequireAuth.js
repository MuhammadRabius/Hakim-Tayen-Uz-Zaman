import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../SharedCompo/Loading/Loading';
import auth from './../../firebase.init';

const RequireAuth = ({children}) => {
      let [user,loading]=useAuthState(auth);
      let location=useLocation();
      
      if(loading){
            return <Loading/>;
      };
      if(!user){
            return <Navigate to='/login' state={{from: location}} replace></Navigate>
      }
       
      return children;
};

export default RequireAuth;