import { ChatPageMessageDTO } from "@/types/ChatPageMessageDTO";
import { create } from "zustand";
import { clientApi } from "../services/client-api";
interface IOneChatMessagesStoreZustand {
    loading: boolean
    chatMessagePage: ChatPageMessageDTO
    fetchMessage: (token: string, id: string) => void
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


    }
}))