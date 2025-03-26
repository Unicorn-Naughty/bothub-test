import React from "react";
import { chatsStoreZustand } from "../store/chats-store";
import { userStoreZustand } from "../store/user-store";



export const useChats = () => {

    const chatsStore = chatsStoreZustand((state) => state);

    const token = userStoreZustand((state) => state.user.token)

    React.useEffect(() => {
        if (token) {
            chatsStore.fetchChatPage(token);
        }
    }, [token]);

    return { loading: chatsStore.loading, chats: chatsStore.chatPage.data };
};