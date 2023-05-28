import React from 'react';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const isAuth = sessionStorage.getItem("user") || "";
    if (!isAuth) {
        return <Navigate to={"/"}  replace></Navigate>
    }
    return children;

}

export default PrivateRoute