import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <>
            <ToastContainer />
            <Outlet />
        </>
    )
}

export default Layout
