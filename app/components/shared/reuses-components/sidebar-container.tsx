
import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
}

export const SidebarContainer: React.FC<Props> = ({ children }) => {


  return (
    <div className={cn("px-4 py-5 bg-elemColor rounded-[18px]")}>
      <aside className="w-[292px] flex flex-col h-full">{children}</aside>
    </div>
  );
};
