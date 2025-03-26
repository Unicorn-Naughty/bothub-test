import { ChatPageDTO } from "@/types/ChatPageDTO"
import { instance } from "../instance"
import { StrippedPostChatDTO } from "@/types/PostChatDTO"
import { ChatEntity } from "@/types/ChatEntity"
import { ChatPageMessageDTO } from "@/types/ChatPageMessageDTO"
import { clearChunks } from "@/lib/streams"

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

export async function* getMessagesFromChatSSE(token: string, id: string) {
    // export const getMessagesFromChatSSE = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/chat/${id}/stream`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'text/event-stream'
        }
    })

    if (!response.body) {
        throw new Error('sucks')
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    const chunks = []

    while (true) {  // Изменили условие цикла
        const { value, done } = await reader.read()

        if (done) {  // Проверяем done здесь
            break;
        }

        const decodedChunk = decoder.decode(value, { stream: true })
        chunks.push(decodedChunk)
        const cleanChunks = clearChunks(decodedChunk)
        for (const chunk of cleanChunks) {
            if(chunk.name === "MESSAGE_UPDATE"){
                yield chunk.data.message.content
            }
        }
        // console.log(cleanChunks);
    }

    // return chunks; // Добавим возврат chunks
}

// const { data } = await instance.get(`/chat/${id}/stream`, {
//     headers: {
//         'Authorization': `Bearer ${token}`,
//         // 'Content-Type': 'application/json'
//         "Content-Type": "application/octet-stream"
//     },
//     responseType: "stream"
// })
// console.log(data);

// const data = await instance.get(`/chat/${id}/stream`, {
//     headers: {
//         'Authorization': `Bearer ${token}`,
//         // 'Content-Type': 'application/json'
//         "Content-Type": "application/octet-stream"
//     },
//     responseType: "stream",
//     adapter: "fetch"
// })

