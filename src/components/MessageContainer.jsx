import React from 'react'
import User from './User'

const MessageContainer = () => {
    return (
        <div className='w-full h-screen'>
            <div className='p-3 border-b border-b-white/20'>
                <User />
            </div>
        </div>
    )
}

export default MessageContainer
