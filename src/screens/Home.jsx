import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/MessageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { initializeSocket } from '../store/slice/socket/socket.slice';

const Home = () => {

    // Redux Functions
    const { isAuthenticated } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // Web Sockets
    useEffect(() => {
        if (!isAuthenticated) return;
        dispatch(initializeSocket());
    }, [isAuthenticated]);

    return (
        <div className='flex'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home
