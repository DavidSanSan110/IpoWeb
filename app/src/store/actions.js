const updateChatTo = (chatTo) => {
    return {
        type: 'UPDATE_CHAT_TO',
        chatTo: chatTo
    }
}

const auth = (auth) => {
    return {
        type: 'UPDATE_AUTH',
        auth: auth
    }
}

const role = (role) => {
    return {
        type: 'UPDATE_ROLE',
        role: role
    }
}

const updateConversationTo = (conversationTo) => {
    return {
        type: 'UPDATE_CONVERSATION_TO',
        conversationTo: conversationTo
    }
}

const resetStore = () => {
    return {
        type: 'RESET_STORE'
    }
}

export { updateChatTo, updateConversationTo, resetStore, auth, role }