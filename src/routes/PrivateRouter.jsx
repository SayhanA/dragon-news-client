import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    console.log(loading)
    
    if(loading){
        return <Spinner animation="border" variant="info" />
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace />;
};

export default PrivateRouter;