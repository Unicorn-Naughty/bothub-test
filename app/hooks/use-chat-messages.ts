import React from "react"
import { oneChatMessagesStoreZustand } from "../store/one-chat-messages-store"
import { userStoreZustand } from "../store/user-store"

export const useChatMessages = (id: string) => {

    const chatMessageState = oneChatMessagesStoreZustand((state) => state)
    
    const token = userStoreZustand((state) => state.user.token)

    React.useEffect(() => {
        chatMessageState.fetchMessage(token, id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { loading: chatMessageState.loading, messages: chatMessageState.chatMessagePage.data }
}