const initialState = {
    channelsList: [],
    selectedChannel: {
        id: null,
        name: null
    }
}
let lastChannelId = 1
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChannel':
            const newChannelObj = {
                name: action.payload.newChannelName,
                id: lastChannelId++
            }
            const newChannelsList = [...state.channelsList, newChannelObj]
            return { ...state, channelsList: newChannelsList }
        case 'channelSelected':
            const newSelectedChannel = {
                id: action.payload.id,
                name: action.payload.name
            }
            return { ...state, selectedChannel: newSelectedChannel }
        default:
            return state
    }
}

export default reducer