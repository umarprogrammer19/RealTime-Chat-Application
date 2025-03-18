import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../store/slice/users/user.thunk';
import User from './User';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    // Redux Hook
    const dispatch = useDispatch();
    const { otherUsers } = useSelector(state => state.userReducer);
    // Navigation
    const navigate = useNavigate();

    // Logout Function
    const handleLogout = async (event) => {
        event.preventDefault();
        const response = await dispatch(logoutUserThunk());
        if (response.payload.success) navigate("/login");
    }
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
            <div className='h-full overflow-y-auto px-3'>
                {otherUsers?.map((user) => {
                    return <User key={user._id} user={user} />
                })}
                {/* <User />
                <User />
                <User /> */}
            </div>
            {/* Footer */}
            <div className='flex items-center justify-between px-3 py-2'>
                {/* Avatar */}
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                {/* Logout Button */}
                <button className='btn btn-primary btn-sm px-4' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;
