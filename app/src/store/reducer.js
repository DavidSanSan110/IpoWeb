import storage from 'redux-persist/lib/storage';

const initialState = {
    chatTo: null,
    conversationTo: null,
    auth: false,
    role: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CHAT_TO': return {
            ...state,
            chatTo: action.chatTo,
        }
        case 'UPDATE_CONVERSATION_TO': return {
            ...state,
            conversationTo: action.conversationTo,
        }
        case 'UPDATE_AUTH': return {
            ...state,
            auth: action.auth,
        }
        case 'UPDATE_ROLE': return {
            ...state,
            role: action.role,
        }
        case 'RESET_STORE': 
            storage.removeItem('persist:root');
            return initialState;

        default: return state;
    }
}



