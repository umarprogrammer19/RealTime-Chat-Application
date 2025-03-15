import React from 'react'
import User from './User'
import Message from './Message'
import { IoIosSend } from 'react-icons/io'

const MessageContainer = () => {
    return (
        <div className='w-full h-screen flex flex-col'>
            {/* User Detail */}
            <div className='p-3 border-b border-b-white/20'>
                <User />
            </div>
            <div className='h-full overflow-y-auto p-4'>
                <Message />
                <Message />
                <Message />
            </div>
            <div className='w-full p-2 flex gap-2'>
                <input
                    type="text"
                    placeholder="Type a message here"
                    className='input input-bordered input-primary w-full'
                />
                <button className="btn btn-square btn-outline btn-primary text-white">
                    <IoIosSend />
                </button>
            </div>
        </div>
    )
}

export default MessageContainer
