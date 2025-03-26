import { MessageSendRequest } from "@/types/MessageSendRequest"
import { instance } from "../instance"
import { ResponseMessageEntity } from "@/types/MessageEntity"

export const postMessageToChat = async (token: string, body: MessageSendRequest) => {
    const {data} = await instance.post<ResponseMessageEntity>('/message/send', body, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return data
}