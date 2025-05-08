import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'}></Navigate>

    }

};

export default PrivateRoute;