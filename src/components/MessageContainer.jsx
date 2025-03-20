import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessageThunk } from '../store/slice/messages/message.thunk'
import Message from './Message'
import SendMessage from './SendMessage'
import User from './User'

const MessageContainer = () => {

    // Redux Reducers
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(state => state.userReducer);
    const { messages } = useSelector(state => state.messageReducer);

    // For Fetching Messages
    useEffect(() => {
        if (!selectedUser?._id) return;
        dispatch(getMessageThunk({ participantId: selectedUser?._id }));
    }, [selectedUser]);

    return (
        <>
            {selectedUser && (
                <div className='w-full h-screen flex flex-col'>
                    {/* User Detail */}
                    <div className='p-3 border-b border-b-white/20'>
                        <User user={selectedUser} />
                    </div>
                    {/* Message Part */}
                    <div className='h-full overflow-y-auto p-4'>
                        {messages?.map((message) => <Message key={message?._id} messageDetails={message} />)}
                    </div>

                    {/* Send Message */}
                    <SendMessage />
                </div>
            )}
        </>
    )
}

export default MessageContainer
