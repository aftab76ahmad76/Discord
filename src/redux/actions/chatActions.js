export function sendMessage(msgInfo) {
    return dispatch => {
        dispatch({
            type: 'sendMessage',
            payload: {
                msgText: msgInfo.msgText,
                channelId: msgInfo.channelId
            }
        })
    }
}