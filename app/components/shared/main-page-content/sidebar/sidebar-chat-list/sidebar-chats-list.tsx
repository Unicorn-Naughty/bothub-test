"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { SidebarChat } from "./sidebar-chat";
import { useChats } from "@/app/hooks/use-chats";
import { ChatSkeleton } from "../../../skeletons/chat-skeleton";

interface Props {
  className?: string;
}

export const SidebarChatsList: React.FC<Props> = ({ className }) => {
  const { loading, chats } = useChats();
  
  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {loading ? (
        Array.from({ length: 3 }).map((_, i) => <ChatSkeleton key={i} />)
      ) : chats.length <= 0 ? (
        <p className="text-center text-helperTextColor">У вас пока нет чатов</p>
      ) : (
        chats.map((chat, i) => <SidebarChat chat={chat} key={i} />)
      )}
    </ul>
  );
};
