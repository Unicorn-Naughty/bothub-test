import React from "react";
import { SidebarContainer } from "../../reuses-components/sidebar-container";
import { SidebarHeader } from "./sidebar-header/sidebar-header";
import { SidebarChatsList } from "./sidebar-chat-list/sidebar-chats-list";
import { SidebarUser } from "./sidebar-user/sidebar-user";

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = () => {
  return (
    <SidebarContainer>
      <SidebarHeader className="pb-4 border-[#313E62] mb-2 border-b" />
      <SidebarChatsList className="px-2 overflow-hidden overflow-y-auto flex-grow" />
      <SidebarUser className="border-[#313E62] border p-4 rounded-[18px]"/>
    </SidebarContainer>
  );
};
