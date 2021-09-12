import React from 'react'
import { useDispatch } from 'react-redux'
import { channelSelected } from '../redux/actions/sideBarActions'
const SidebarChannel = ({ name, id }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(channelSelected({id,name}))
    }
    return (
        <div className='sidebar-channel' onClick={handleClick}>
            <h4>
                <span className='sidebar-channel-hash'>
                    {'#'}
                </span>
                {name}
            </h4>
        </div>
    )
}

export default SidebarChannel
