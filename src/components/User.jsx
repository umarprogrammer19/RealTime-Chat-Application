import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../store/slice/users/user.slice';

const User = ({ user }) => {
    // Redux State 
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(state => state.userReducer);

    return (
        <div onClick={() => dispatch(setSelectedUser(user))} className={`flex gap-5 items-center hover:bg-gray-700 p-1 cursor-pointer ${user?._id === selectedUser?._id && "bg-gray-700"}`}>
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                    <img src={user?.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='line-clamp-1'>{user?.fullname || "Fullname"}</h2>
                <p className='text-xs'>{user?.username || "username"}</p>
            </div>
        </div>
    )
}

export default User
