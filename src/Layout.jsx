import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getUserProfileThunk } from './store/slice/users/user.thunk';

const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfileThunk());
    }, [])
    return (
        <>
            <ToastContainer />
            <Outlet />
        </>
    )
}

export default Layout
