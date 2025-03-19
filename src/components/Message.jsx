import React from 'react'
import { useSelector } from 'react-redux';

const Message = ({ messageDetails }) => {
    const { userProfile, selectedUser } = useSelector(state => state.userReducer);
    return (
        <div>
            <div className={`chat ${userProfile?._id === messageDetails?.senderId ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={messageDetails?.senderId === userProfile?._id ? userProfile?.avatar : selectedUser?.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">{messageDetails?.message}</div>
                {/* <div className="chat-footer opacity-50">Delivered</div> */}
            </div>
            {/* <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div> */}
        </div>
    )
}

export default Message
