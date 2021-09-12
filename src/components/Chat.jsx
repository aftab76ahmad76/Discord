import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Messege from './Messege';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/actions/chatActions';
import { useSelector } from 'react-redux';

const Chat = () => {
    const dispatch = useDispatch()
    const [msgText, setMsgText] = useState()
    const channelId = useSelector(state => state.sideBar.selectedChannel.id)
    console.log('sadsads ::', channelId);
    const messages = useSelector(state => {
        return (
            state.chat.filter(item => item.channelId === channelId)
        )
    })
    console.log('MESSAGES :::::', messages);
    const handleMessegeSend = e => {
        e.preventDefault()
        setMsgText('')
        dispatch(sendMessage({ msgText: msgText, channelId: channelId }))
    }
    return (
        <div className='chat'>
            <ChatHeader />
            {
                channelId ?
                    <div className="chat-messeges">
                        {
                            messages.map(item => {
                                return <Messege msgText={item.msgText} />
                            })
                        }
                    </div>
                    :
                    <div className="chat-messeges user-msg">
                        {'Add a channel to start conversation'}
                    </div>
            }
            < div className="chat-input">
                <AddCircleIcon fontSize='large' />
                <form onSubmit={handleMessegeSend}>
                    <input disabled={!channelId} value={msgText} onChange={(e) => setMsgText(e.target.value)} placeholder={`Write Messege`} />
                    <button type="submit" className='chat-input-btn' onClick={handleMessegeSend}>
                        {'Send Messege'}
                    </button>
                </form>
                <div className="chat-input-icons">
                    <CardGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmotionsIcon fontSize='large' />
                </div>
            </div>
        </div >
    )
}

export default Chat
