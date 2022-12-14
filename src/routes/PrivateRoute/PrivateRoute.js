import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return 
    }
    if(!user){
        return <Navigate to="/signin" state={{from: location}} replace></Navigate>
        
    } else{
        return children;
    }
    
};

export default PrivateRoute;