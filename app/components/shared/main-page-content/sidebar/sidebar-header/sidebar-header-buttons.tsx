import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const SidebarHeaderButtons: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2.5",className)}>
      <button>
        <Image
          width={38}
          height={38}
          alt="add-chat-icon"
          src={"/sidebar/side-bar-buttons.svg"}
        />
      </button>
      <button className="border border-helperTextColor rounded-[8px] p-2.5">
        <Search className="size-[18px] text-helperTextColor" />
      </button>
    </div>
  );
};
