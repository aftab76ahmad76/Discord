const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'sendMessage':
            const newMsg = {
                msgText: action.payload.msgText,
                channelId: action.payload.channelId
            }
            return [...state, newMsg]
        default:
            return state
    }
}

export default reducer