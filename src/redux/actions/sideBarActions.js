export function addChannel(newChannelName) {
    return (dispatch) => {
        dispatch({
            type: 'addChannel',
            payload: {
                newChannelName
            }
        })
    }
}

export function channelSelected(channelInfo) {
    return (dispatch) => {
        dispatch({
            type: 'channelSelected',
            payload: {
                id: channelInfo.id,
                name: channelInfo.name
            }
        })
    }
}