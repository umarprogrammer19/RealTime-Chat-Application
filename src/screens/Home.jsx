import React from 'react';
import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/MessageContainer';

const Home = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home
