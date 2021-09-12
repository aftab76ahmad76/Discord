import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import { useSelector } from 'react-redux';
const ChatHeader = () => {
    const channelName = useSelector(state => state.sideBar.selectedChannel.name)
    return (
        <div className='chat-header'>
            <div className="chat-header-left">
                <h3>
                    <span className='chat-header-hash'>
                        {'#'}
                    </span>
                    {channelName}
                </h3>
            </div>
            <div className="chat-header-right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />
                <div className="chat-header-search">
                    <input placeholder='Search' />
                    <SearchIcon />
                </div>
                <SendIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader