import React from 'react'
import { IoSearch } from 'react-icons/io5';
import User from './User';

const Sidebar = () => {
    return (
        <div className='max-w-[20rem] h-screen w-full flex flex-col border-r border-r-white/10'>
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
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
            {/* Footer */}
            <div>
                
            </div>
        </div>
    )
}

export default Sidebar;
