import React from 'react';
import { Routes, Route } from "react-router-dom"
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PrivateRoute from '../pages/PrivateRoute';
import FourOFour from '../pages/FourOFour';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }></Route>
                <Route path='*' element={<FourOFour />}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes