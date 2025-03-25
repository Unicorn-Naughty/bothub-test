import { cn } from "@/lib/utils";
import { MessageSquare, Trash } from "lucide-react";

import React from "react";
interface Props {
  className?: string;
}

export const SidebarChat: React.FC<Props> = ({ className }) => {
  return (
    <li className={cn("flex items-center justify-between p-2", className)}>
      <div className="flex items-center gap-2">
        <button>
          <MessageSquare className="size-[18px] text-helperTextColor font-medium" />
        </button>
        <blockquote>
          <p className="text-helperTextColor text-[16px] leading-[22px]">Новый чат</p>
        </blockquote>
      </div>

      <button>
        <Trash className="size-[18px] text-helperTextColor" />
      </button>
    </li>
  );
};
