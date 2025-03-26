import { ChatPageDTO } from "@/types/ChatPageDTO"
import { instance } from "../instance"
import { StrippedPostChatDTO } from "@/types/PostChatDTO"
import { ChatEntity } from "@/types/ChatEntity"
import { ChatPageMessageDTO } from "@/types/ChatPageMessageDTO"

export const getAllChats = async (token: string) => {
    const { data } = await instance.get<ChatPageDTO>('/chat/list', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return data
}

export const postChat = async (token: string, body: StrippedPostChatDTO) => {
    const { data } = await instance.post<ChatEntity>('/chat', body, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return data
}

export const deleteChat = async (token: string, id: string) => {
    const { data } = await instance.delete<ChatEntity>(`/chat/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return data
}

export const getMessagesFromChat = async (token: string, id: string) => {
    const { data } = await instance.get<ChatPageMessageDTO>(`/chat/${id}/messages`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return data
}