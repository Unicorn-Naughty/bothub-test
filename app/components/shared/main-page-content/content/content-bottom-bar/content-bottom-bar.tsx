import React from "react";
import { ContentDropdownComponent } from "./content-dropdown-component";
import { Input } from "../../../reuses-components/input";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const ContentBottomBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("",className)}>
      <ContentDropdownComponent />
      <Input className="mt-3 pl-4 pr-[60px] py-6 rounded-[10px]" placeholder="Спроси о чем-нибудь..." messagesPage={true} />
    </div>
  );
};
