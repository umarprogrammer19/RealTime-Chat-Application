import React from 'react'
import User from './User'
import Message from './Message'

const MessageContainer = () => {
    return (
        <div className='w-full h-screen'>
            {/* User Detail */}
            <div className='p-3 border-b border-b-white/20'>
                <User />
            </div>
            <div className='h-full overflow-y-auto p-4'>
                <Message />
                <Message />
                <Message />
            </div>
            <div></div>
        </div>
    )
}

export default MessageContainer
