import { cn } from "@/lib/utils";
import React from "react";
import { SidebarChat } from "./sidebar-chat";
interface Props {
  className?: string;
}

export const SidebarChatsList: React.FC<Props> = ({ className }) => {
  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      <SidebarChat />
    </ul>
  );
};
