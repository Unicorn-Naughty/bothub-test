import { ChatPageMessageDTO } from "@/types/ChatPageMessageDTO";
import { create } from "zustand";
import { clientApi } from "../services/client-api";
import { MessageSendRequest } from "@/types/MessageSendRequest";
interface IOneChatMessagesStoreZustand {
    loading: boolean
    chatMessagePage: ChatPageMessageDTO
    fetchMessage: (token: string, id: string) => void
    postMessageToChat: (token: string, body: MessageSendRequest) => void
    getMessageFromChatSSE: (token: string, id: string) => void
}
export const oneChatMessagesStoreZustand = create<IOneChatMessagesStoreZustand>((set) => ({
    loading: true,
    chatMessagePage: {
        data: [],
        pages: 0
    },
    fetchMessage: async (token, id) => {
        try {
            const response = await clientApi.chats.getMessagesFromChat(token, id)
            set({ chatMessagePage: response })
        } catch (error) {
            console.log(error);

        } finally {
            set({ loading: false })
        }


    },
    postMessageToChat: async (token, body) => {
        try {
            const response = await clientApi.messages.postMessageToChat(token, body)
            set(state => ({
                chatMessagePage: {
                    ...state.chatMessagePage,
                    data: [...state.chatMessagePage.data, response]
                }
            }))
        } catch (error) {
            console.log(error);
        }
    },
    getMessageFromChatSSE: async (token, id) => {
        try {
            const response = clientApi.chats.getMessagesFromChatSSE(token, id)
            for await (const message of response) {
                set(state => ({
                    chatMessagePage: {
                        ...state.chatMessagePage,
                        data: [message]
                    }
                }))
            }

        } catch (error) {
            console.log(error);

        }

    },
}))