import { ChatPageDTO } from "@/types/ChatPageDTO";
import { create } from "zustand";
import { clientApi } from "../services/client-api";
import { StrippedPostChatDTO } from "@/types/PostChatDTO";
interface IChatsStoreZustnad {
    loading: boolean
    chatPage: ChatPageDTO
    fetchChatPage: (token: string) => void
    createChat: (token: string, body: StrippedPostChatDTO) => void
    deleteChat: (token: string, id: string) => void
}
export const chatsStoreZustand = create<IChatsStoreZustnad>((set) => ({
    loading: true,
    chatPage: {
        data: [],
        pages: 0
    },
    fetchChatPage: async (token) => {
        try {
            const response = await clientApi.chats.getAllChats(token)
            set({ chatPage: response })
        } catch (error) {
            console.log(error);

        } finally {
            set({ loading: false })
        }
    },
    createChat: async (token, body) => {
        try {
            const response = await clientApi.chats.postChat(token, body)
            set(state => ({
                chatPage: {
                    ...state.chatPage,
                    data: [...state.chatPage.data, response]
                }
            }))
        } catch (error) {
            console.log(error);

        }
    },
    deleteChat: async (token, id) => {
        try {
            await clientApi.chats.deleteChat(token, id)
            set(state => ({
                chatPage: {
                    ...state.chatPage,
                    data: state.chatPage.data.filter((chat) => chat.id !== id)
                }
            }))
        } catch (error) {
            console.log(error);

        }
    }
}))