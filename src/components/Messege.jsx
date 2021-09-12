import { Avatar } from '@material-ui/core'
import React from 'react'

const Messege = ({ msgText }) => {
    return (
        <div className='messege'>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjDBO1V6Y6i2ObD7MoyKHkjuVTGQUVs7wJA&usqp=CAU' />
            <div className="msg-info">
                <h4>
                    {'aa0140527'}
                    <span className='msg-time'>
                        {'Tue, 08 Oct 2021'}
                    </span>
                </h4>
                <p>
                    {msgText}
                </p>
            </div>
        </div>
    )
}

export default Messege