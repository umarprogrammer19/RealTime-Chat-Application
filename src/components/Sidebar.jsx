import React from 'react'
import { IoSearch } from 'react-icons/io5';

const Sidebar = () => {
    return (
        <div className='max-w-[20rem] h-screen bg-red-600 w-full flex flex-col'>
            <h1>Gupshup</h1>
            {/* Search Bar */}
            <div className='p-3'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="search" className='grow' required placeholder="Search" />
                    <IoSearch />
                </label>
            </div>
            {/* Rendered Users `*/}
            <div className='h-full overflow-y-scroll'>

            </div>
            {/* Footer */}
            <div className='h-[3rem] bg-black'>

            </div>
        </div>
    )
}

export default Sidebar;
