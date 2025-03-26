import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarHeaderCreateDropdown } from "./sidebar-header-create-dropdown";
interface Props {
  className?: string;
}

export const SidebarHeaderButtons: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2.5",className)}>
      <SidebarHeaderCreateDropdown/>
      <button className="border border-helperTextColor rounded-[8px] p-2.5">
        <Search className="size-[18px] text-helperTextColor" />
      </button>
    </div>
  );
};
