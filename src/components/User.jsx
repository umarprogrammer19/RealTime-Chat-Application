import React from 'react'

const User = ({ user }) => {
    return (
        <div className='flex gap-5 items-center'>
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
