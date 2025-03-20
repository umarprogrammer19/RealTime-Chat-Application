import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../store/slice/messages/message.thunk';

const SendMessage = () => {
    
    // For Getting Message From The Feild
    const [message, setMessage] = useState("");

    // Redux Functions
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(state => state.userReducer);

    // Handle Send Message
    const handleSendMessage = async () => {
        dispatch(sendMessageThunk({ message, receiverId: selectedUser._id }));
    }

    return (
        <div className='w-full p-2 flex gap-2'>
            <input
                type="text"
                placeholder="Type a message here"
                className='input input-bordered input-primary w-full'
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className="btn btn-square btn-outline btn-primary text-white"
                onClick={handleSendMessage}
            >
                <IoIosSend />
            </button>
        </div>
    )
}

export default SendMessage
