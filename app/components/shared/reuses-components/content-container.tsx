import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ContentContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("p-5 bg-elemColor", className)}>
      <div className="max-w-[1290px] mx-auto flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};
