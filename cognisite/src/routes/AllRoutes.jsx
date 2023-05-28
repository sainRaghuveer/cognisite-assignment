import React from 'react';
import { Routes, Route } from "react-router-dom"
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PrivateRoute from '../pages/PrivateRoute';

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

            </Routes>
        </div>
    )
}

export default AllRoutes