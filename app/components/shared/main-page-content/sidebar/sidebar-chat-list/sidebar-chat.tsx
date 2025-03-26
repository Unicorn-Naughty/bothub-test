import { chatsStoreZustand } from "@/app/store/chats-store";
import { oneChatMessagesStoreZustand } from "@/app/store/one-chat-messages-store";
import { userStoreZustand } from "@/app/store/user-store";
import { cn } from "@/lib/utils";
import { ChatEntity } from "@/types/ChatEntity";
import { MessageSquare, Trash } from "lucide-react";

import React from "react";
interface Props {
  className?: string;
  chat: ChatEntity;
}

export const SidebarChat: React.FC<Props> = ({ className, chat }) => {
  const deleteChat = chatsStoreZustand((state) => state.deleteChat);

  const token = userStoreZustand((state) => state.user.token);
  const fetchMessages = oneChatMessagesStoreZustand(
    (state) => state.fetchMessage
  );

  const handleDeleteChat = (id: string, token: string) => {
    deleteChat(token, id);
  };

  const handleFetchMessages = () => {
    fetchMessages(token, chat.id);
  };

  return (
    <li className={cn("flex items-center justify-between p-2", className)}>
      <div onClick={handleFetchMessages} className="flex items-center gap-2 cursor-pointer">
        <MessageSquare className="size-[18px] text-helperTextColor font-medium" />

        <blockquote>
          <p className="w-[200px]  text-helperTextColor text-[16px] leading-[22px] text-ellipsis overflow-hidden whitespace-nowrap">
            {chat.name}
          </p>
        </blockquote>
      </div>

      <button onClick={() => handleDeleteChat(chat.id, token)}>
        <Trash className="size-[18px] text-helperTextColor" />
      </button>
    </li>
  );
};
