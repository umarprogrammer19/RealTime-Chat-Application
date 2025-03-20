import React, { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOtherUserProfileThunk, logoutUserThunk } from '../store/slice/users/user.thunk';
import User from './User';

const Sidebar = () => {

    // Redux Hook
    const dispatch = useDispatch();
    const { otherUsers, userProfile } = useSelector(state => state.userReducer);

    // Navigation
    const navigate = useNavigate();

    // Logout Function
    const handleLogout = async (event) => {
        event.preventDefault();
        const response = await dispatch(logoutUserThunk());
        if (response.payload.success) navigate("/login");
    }

    // For Rendering Other Users Profile
    useEffect(() => {
        (async () => await dispatch(getOtherUserProfileThunk()))()
    }, []);

    return (
        <div className='max-w-[20rem] h-screen w-full flex flex-col border-r border-r-white/10'>
            {/* Gupshup Heading */}
            <h1 className='mx-3 mt-3 rounded-lg px-2 py-1 text-primary text-xl font-semibold'>Gupshup</h1>
            {/* Search Bar */}
            <div className='p-3'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="search" className='grow' required placeholder="Search" />
                    <IoSearch />
                </label>
            </div>
            {/* Rendered Users */}
            <div className='h-full overflow-y-auto px-3 flex flex-col gap-2'>
                {otherUsers?.map((user) => {
                    return <User key={user._id} user={user} />
                })}
            </div>
            {/* Footer */}
            <div className='flex items-center justify-between px-3 py-2'>
                <div className='flex items-center gap-3'>
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                            <img src={userProfile?.avatar} />
                        </div>
                    </div>
                    {/* Fullname */}
                    <h2 className='text-lg'>{userProfile?.fullname}</h2>
                </div>
                {/* Logout Button */}
                <button className='btn btn-primary btn-sm px-4' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;
