import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/MessageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { initializeSocket, setOnlineUsers } from '../store/slice/socket/socket.slice';
import { setNewMessage } from '../store/slice/messages/message.slice';

const Home = () => {

    // Redux Functions
    const { isAuthenticated, userProfile } = useSelector(state => state.userReducer);
    const { socket } = useSelector(state => state.socketReducer);
    const dispatch = useDispatch();

    // Web Sockets
    useEffect(() => {
        if (!isAuthenticated) return;
        if (userProfile?._id)
            dispatch(initializeSocket(userProfile._id));
    }, [isAuthenticated]);

    useEffect(() => {
        if (!socket) return;

        // For Getting Realtime Online Users
        socket.on("onlineUsers", (onlineUsers) => {
            dispatch(setOnlineUsers(onlineUsers));
        });

        // For Getting Messages On Realtime
        socket.on("newMessage", (newMessage) => {
            dispatch(setNewMessage(newMessage));
        });

        // Close Connection On Component Unmount 
        return () => {
            socket.close();
        }
    }, [socket])

    return (
        <div className='flex'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home
