import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getUserProfileThunk } from './store/slice/users/user.thunk';

const Layout = () => {
    // Redux Hook
    const dispatch = useDispatch();

    // For Getting Profile
    useEffect(() => {
        (async () => await dispatch(getUserProfileThunk()))()
    }, []);
    
    return (
        <>
            <ToastContainer />
            <Outlet />
        </>
    )
}

export default Layout
