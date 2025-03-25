import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { DropdownLanguage } from "./dropdown-language";
interface Props {
  className?: string;
}

export const SidebarHeaderTitle: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("flex items-center justify-between ", className)}>
      <div>
        <Image src={"/sidebar/logo.png"} alt="logo" width={104} height={30} />
      </div>
        <DropdownLanguage />        
    </header>
  );
};
